# How to upgrade the NeuVector Package chart

BigBang makes modifications to the upstream helm chart. The full list of changes is at the end of this document.

1. Renovate should have made a `renovate/ironbank` branch with all necessary version updates. Checkout this branch locally.
1. From the root of the repo run `kpt pkg update chart@<version> --strategy alpha-git-patch` replacing `<version>` with the latest version tag from the [upstream repo](https://github.com/neuvector/neuvector-helm) that has matching image versions. You may be prompted to resolve some conflicts - choose what makes sense (if there are BB additions/changes keep them, if there are upstream additions/changes keep them). You may want to use an alternative strategy with `kpt` (like `force-delete-replace`), and then restore the BB changes as needed.
1. Update `chart/Chart.yaml` to the appropriate versions. The annotation version should match the `appVersion`. If we have moved to a new chart version reset the `bb.X` version to `bb.0`.
    ```yaml
    version: X.X.X-bb.X
    appVersion: X.X.X
    annotations:
      bigbang.dev/applicationVersions: |
        - NeuVector: X.X.X
    ```
1. Update gluon to a new version (if necessary) and run `helm dependency update chart` to package up new gluon as a `.tgz`.
1. Update `CHANGELOG.md` with an entry for the update. At minimum add the new image versions and any chart version update.
1. Update `README.md` following the [gluon library script](https://repo1.dso.mil/platform-one/big-bang/apps/library-charts/gluon/-/blob/master/docs/bb-package-readme.md) instructions.
1. Use a development environment to deploy and test NeuVector. See more detailed testing instructions below. Also make sure to test an upgrade from the previous version. Make any adjustments as needed based on testing and update the `README.md` again if required.
1. Validate CI has passed then move your MR into review (Renovate should've opened an MR for you).

# Testing new NeuVector version

It is important to note that NeuVector is not currently part of the BB "umbrella" chart, so you will need to install it on the side. The steps below should be helpful in doing that.

## Deploying NeuVector

NOTE: In initial exploration of NeuVector we discovered that k3d/kind (dockerized clusters) are not supported by NeuVector (see [this](https://open-docs.neuvector.com/basics/requirements#not-supported)). However we have been able to successfully test with some workarounds. One of the main requirements seems to be cgroupsv2 in order to workaround a limitation in NeuVector startup code. If you are using the k3d dev script this should already be enabled by default. To validate you can use [this check](https://rootlesscontaine.rs/getting-started/common/cgroup2/#checking-whether-cgroup-v2-is-already-enabled) and if required enable cgroupsv2 following [these steps](https://rootlesscontaine.rs/getting-started/common/cgroup2/#enabling-cgroup-v2).

Deploy Big Bang with at minimum Istio, Monitoring, and Neuvector enabled. For Neuvector on k3d you will need to enable the k3s runtime value:

```yaml
neuvector:
  enabled: true
  values:
    k3s:
      enabled: true
```

## Testing NeuVector

1. Validate all pods successfully go to "Running".
1. Validate you are able to hit the UI, which should be exposed at `neuvector.bigbang.dev` (make sure this is in your `/etc/hosts` file).
1. Login with the default admin user (username: `admin`, password: `admin`)
1. Validate pages show information. Key pages to check:
  - Main dashboard should be populated with details in most/all panels
  - Network Activity (you may need to zoom in/out to see pods/hosts)
  - Assets pages: Should show nodes/containers, "System Components" should show connected controllers and enforcers (and several scanners up)
1. Under the Assets -> Containers page run a scan on a few images. You may just want to enable the `Auto Scan` option on the top right. Validate that scans finish and vulnerabilities are found on the vulnerabilities tab for a given image. You can also try the same scan on Assets -> Hosts to scan the k3d hosts.
1. If the big-bang/base image has been updated, the "updater" functionality should be verified - this updates the CVE database by forcing a pull of the `scanner` image. The updater job is run via the cronjob `neuvector-updater-pod`, so check that this runs successfully.

# Modifications made to upstream chart

This is a high-level list of modifications that Big Bang has made to the upstream helm chart. You can use this as as cross-check to make sure that no modifications were lost during the upgrade process.

NOTE: This list may not be complete yet - it should be updated as updates are worked to ensure we have a complete list.

## chart/Chart.yaml

- Append `-bb.x` to Chart version
- Add gluon library dependency
- Add BB dev application version annotation
- Add monitor subchart dependency

## chart/deps/monitor/templates/exporter-servicemonitor.yaml

- Add support for scheme and tlsConfig

## chart/deps/monitor/templates/exporter-service.yaml

- Add `appProtocol: http` to the metrics port to support Istio protocol detection

## chart/deps/monitor/values.yaml

- Add empty defaults for scheme and tlsConfig

## chart/templates/bigbang/*

- Templates added to support network policies, mTLS, and Istio virtual service

## chart/values.yaml

- Images changed to Ironbank images rather than upstream
- Added `JDK_JAVA_OPTIONS` to `manager.env.envs`

  ```yaml
    envs:
      # This setting should be enabled when in FIPS environments to prevent Java errors arising from the FIPS alignment
      - name: JDK_JAVA_OPTIONS
        value: "-Dcom.redhat.fips=false"
  ```
  
- Added at the bottom of the values file are changes to support Istio, monitoring, and optional network policies.

  ```yaml
  istio:
    enabled: false
    # -- Default neuvector peer authentication
    mtls:
      # -- STRICT = Allow only mutual TLS traffic,
      # PERMISSIVE = Allow both plain text and mutual TLS traffic
      mode: STRICT
  monitoring:
    enabled: false

  monitoring:
    enabled: false

  networkPolicies:
    enabled: false
    ingressLabels: 
      app: istio-ingressgateway
      istio: ingressgateway
    controlPlaneCidr: 0.0.0.0/0
  ```

## Grafana Dashboards

- Added `chart/dashboards/neuvector-dashboard.json`
- Added `chart/templates/bigbang/neuvector-dashboards.yaml`

  ```bash
  # To update Neuvector Dashboard
  # Current version was pulled from https://raw.githubusercontent.com/neuvector/prometheus-exporter/2af0012979e7d53e012794547820d7c5fd172afa/nv_dashboard.json
  curl https://raw.githubusercontent.com/neuvector/prometheus-exporter/master/nv_dashboard.json -o chart/dashboards/neuvector-dashboard.json
  ```
### automountServiceAccountToken
The mutating Kyverno policy named `update-automountserviceaccounttokens` is leveraged to harden all ServiceAccounts in this package with `automountServiceAccountToken: false`. This policy is configured by namespace in the Big Bang umbrella chart repository at [chart/templates/kyverno-policies/values.yaml](https://repo1.dso.mil/big-bang/bigbang/-/blob/master/chart/templates/kyverno-policies/values.yaml?ref_type=heads). 

This policy revokes access to the K8s API for Pods utilizing said ServiceAccounts. If a Pod truly requires access to the K8s API (for app functionality), the Pod is added to the `pods:` array of the same mutating policy. This grants the Pod access to the API, and creates a Kyverno PolicyException to prevent an alert.
