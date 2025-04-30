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

### Deploy NeuVector as part of Big Bang

- Create a k8s dev environment. One option is to use the Big Bang k3d-dev.sh with no arguments which will give you the default configuration. The following steps assume you are using the script.
- Follow the instructions at the end of the script to connect to the k8s cluster and install flux.
- Deploy NeuVector with these dev values overrides. Core apps are disabled for quick deployment.

```
neuvector:
  enabled: true
  sourceType: "git"
  git:
    repo: https://repo1.dso.mil/big-bang/product/packages/neuvector.git
    path: chart
    tag: null
    branch: "replace-me-with-your-branch-name"
```

- A more robust option is to deploy Big Bang with Istio, Monitoring, and Neuvector enabled. For Neuvector on k3d you will need to enable the k3s runtime value as shown below:

```
istioOperator:
  enabled: true
istio:
  enabled: true
neuvector:
  enabled: true
  values:
    k3s:
      enabled: true
  sourceType: "git"
  git:
    repo: https://repo1.dso.mil/big-bang/product/packages/neuvector.git
    path: chart
    tag: null
    branch: "replace-me-with-your-branch-name"
monitoring:
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
1. Ensure integration tests are passing by following the[test-package-against-bb](https://repo1.dso.mil/big-bang/bigbang/-/blob/master/docs/developer/test-package-against-bb.md?ref_type=heads) doc and modify test-values with the robust overrides values listed in [Deploy NeuVector as part of Big Bang](#deploy-neuvector-as-part-of-big-bang)

# Modifications made to upstream chart

This is a high-level list of modifications that Big Bang has made to the upstream helm chart. You can use this as as cross-check to make sure that no modifications were lost during the upgrade process.

NOTE: This list may not be complete yet - it should be updated as updates are worked to ensure we have a complete list.

## chart/Chart.yaml

- Append `-bb.x` to Chart version
- Update gluon library dependency
- Update monitor subchart dependency
- Add BB dev application version annotation

## chart/templates/controller-deployment.yaml

- Added tpl function in pod template section near line 38 for version labels

## chart/templates/enforcer-daemonset.yaml

- Added tpl function in pod template section near line 45 for version labels

## chart/templates/manager-deployment.yaml

- Added tpl function in pod template section near line 26 for version labels

## chart/templates/registry-adapter.yaml

- Added tpl function in pod template section near line 26 for version labels

## chart/templates/scanner-deployment.yaml

- Added tpl function in pod template section near line 27 for version labels

## chart/templates/updater-cronjob.yaml

- Added tpl function in pod template section near line 27

## chart/templates/upgrader-cronjob.yaml

- Added tpl function in pod template section near line 40

## chart/templates/bigbang/\*

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
  domain: dev.bigbang.mil
  istio:
    enabled: false
    injection: "enabled"
    hardened:
      enabled: false
      customAuthorizationPolicies: []
      # - name: "allow-nothing"
      #   enabled: true
      #   spec: {}
    neuvector:
      enabled: true
      annotations: {}
      labels: {}
      gateways:
        - istio-system/main
      hosts:
        - neuvector.{{ .Values.domain }}
    # -- Default neuvector peer authentication
    mtls:
      # -- STRICT = Allow only mutual TLS traffic,
      # PERMISSIVE = Allow both plain text and mutual TLS traffic
      mode: STRICT

  monitoring:
    enabled: false
    namespace: monitoring

  networkPolicies:
    enabled: false
    ingressLabels:
      app: istio-ingressgateway
      istio: ingressgateway
    controlPlaneCidr: 0.0.0.0/0

  monitor:
    imagePullSecrets: private-registry

  # Bigbang helm test values default disabled
  bbtests:
    enabled: false
    cypress:
      artifacts: true
      envs:
        cypress_url: "http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"
    scripts:
      envs:
        URL: "http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"
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

## Monitor chart

In `2.8.5-bb.0`, the monitor chart from upstream was added as a dependency instead of being bundled directly. This simplies the chart management.


## Excluding healthchecks from Istio Mesh

Update deployments & daemonsets with `traffic.sidecar.istio.io/excludeInboundPorts: "18500"` to allow the cert-updater pod
to properly communicate with the healthcheck endpoints. This may change in the future

See https://repo1.dso.mil/big-bang/product/packages/neuvector/-/issues/179 for more details.

## ImagePullPolicy is set to Always 

ImagePullPolicy is overrided to Always wherever possible since IronBank rebuilds images nightly.

```