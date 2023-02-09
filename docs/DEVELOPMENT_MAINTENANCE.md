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

1. Deploy Big Bang with at minimum Istio enabled. Currently Gatekeeper/Kyverno do not have the necessary exceptions to allow NeuVector to run so it's recommended to deploy without them.
1. Create a `neuvector` namespace: `kubectl create ns neuvector`
1. Copy the `private-registry` image pull secret to the `neuvector` namespace: `kubectl get secret private-registry -n=istio-system -o yaml | sed 's/namespace: .*/namespace: neuvector/' | kubectl apply -n=neuvector -f -`
1. Helm install NeuVector via `helm install neuvector chart -n neuvector --set istio.enabled=true --set k3s.enabled=true --set istio.neuvector.gateways={"istio-system/public"} --set manager.env.ssl=false --set istio.mtls.mode=DISABLE`, see below for explanation of options we are setting:
  - enable Istio interactions
  - set the VS to the public gateway
  - enable the k3s runtime (if on k3s/k3d)
  - disable SSL for the manager since we are not passing in SSL certs
  - set Istio mTLS to disabled (this is temporary until istio injection is working)

## Testing NeuVector

1. Validate all pods successfully go to "Running".
1. Validate you are able to hit the UI, which should be exposed at `neuvector.bigbang.dev` (make sure this is in your `/etc/hosts` file).
1. Login with the default admin user (username: `admin`, password: `admin`)
1. Validate pages show information. Key pages to check:
  - Main dashboard should be populated with details in most/all panels
  - Network Activity (you may need to zoom in/out to see pods/hosts)
  - Assets pages: Should show nodes/containers, "System Components" should show connected controllers and enforcers (and several scanners up)
1. Under the Assets -> Containers page run a scan on a few images. You may just want to enable the `Auto Scan` option on the top right. Validate that scans finish and vulnerabilities are found on the vulnerabilities tab for a given image. You can also try the same scan on Assets -> Hosts to scan the k3d hosts.

# Modifications made to upstream chart

This is a high-level list of modifications that Big Bang has made to the upstream helm chart. You can use this as as cross-check to make sure that no modifications were lost during the upgrade process.

NOTE: This list may not be complete yet - it should be updated as updates are worked to ensure we have a complete list.

## chart/Chart.yaml

- Append `-bb.x` to Chart version
- Add gluon library dependency
- Add BB dev application version annotation

## chart/templates/bigbang/*

- Templates added to support network policies, mTLS, and Istio virtual service

## chart/templates/manager-deployment.yaml

- Added Java args/fips alignment support with:
  ```yaml
  {{- if .Values.manager.env.disableFipsInJava }}
  - name: JDK_JAVA_OPTIONS
    value: "-Dcom.redhat.fips=false"
  {{- end }}
  ```

## chart/values.yaml

- Images changed to Ironbank images rather than upstream
- Added `manager.env.disableFipsInJava`
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

## addition of grafana dashboards

- Added `chart/dashboards/neuvector-dashboard.json`
- Added `chart/templates/bigbang/neuvector-dashboards.yaml`

  ```bash
  # To update Neuvector Dashboard
  # Current version was pulled from https://raw.githubusercontent.com/neuvector/prometheus-exporter/2af0012979e7d53e012794547820d7c5fd172afa/nv_dashboard.json
  curl https://raw.githubusercontent.com/neuvector/prometheus-exporter/master/nv_dashboard.json -o chart/dashboards/neuvector-dashboard.json
  ```
