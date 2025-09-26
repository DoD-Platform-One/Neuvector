<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# neuvector

![Version: 2.8.8-bb.1](https://img.shields.io/badge/Version-2.8.8--bb.1-informational?style=flat-square) ![AppVersion: 5.4.6](https://img.shields.io/badge/AppVersion-5.4.6-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

Helm chart for NeuVector's core services

## Upstream References

- <https://neuvector.com>

## Upstream Release Notes

- [Find our upstream chart's CHANGELOG here](https://repo1.dso.mil/big-bang/product/packages/neuvector/-/blob/main/CHANGELOG.md?ref_type=heads)
- [and our upstream application release notes here](https://github.com/neuvector/neuvector/releases)

## Learn More

- [Application Overview](docs/overview.md)
- [Other Documentation](docs/)

## Pre-Requisites

- Kubernetes Cluster deployed
- Kubernetes config installed in `~/.kube/config`
- Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

- Clone down the repository
- cd into directory

```bash
helm install neuvector chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| domain | string | `"dev.bigbang.mil"` |  |
| istio.enabled | bool | `false` |  |
| istio.injection | string | `"enabled"` |  |
| istio.hardened.enabled | bool | `false` |  |
| istio.hardened.customAuthorizationPolicies | list | `[]` |  |
| istio.hardened.outboundTrafficPolicyMode | string | `"REGISTRY_ONLY"` |  |
| istio.hardened.monitoring.enabled | bool | `true` |  |
| istio.hardened.monitoring.namespaces[0] | string | `"monitoring"` |  |
| istio.hardened.monitoring.principals[0] | string | `"cluster.local/ns/monitoring/sa/monitoring-grafana"` |  |
| istio.hardened.monitoring.principals[1] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-alertmanager"` |  |
| istio.hardened.monitoring.principals[2] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-operator"` |  |
| istio.hardened.monitoring.principals[3] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-prometheus"` |  |
| istio.hardened.monitoring.principals[4] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-kube-state-metrics"` |  |
| istio.hardened.monitoring.principals[5] | string | `"cluster.local/ns/monitoring/sa/monitoring-monitoring-prometheus-node-exporter"` |  |
| istio.hardened.customServiceEntries | list | `[]` |  |
| istio.neuvector.enabled | bool | `true` |  |
| istio.neuvector.annotations | object | `{}` |  |
| istio.neuvector.labels | object | `{}` |  |
| istio.neuvector.gateways[0] | string | `"istio-system/main"` |  |
| istio.neuvector.hosts[0] | string | `"neuvector.{{ .Values.domain }}"` |  |
| istio.mtls | object | `{"mode":"STRICT"}` | Default neuvector peer authentication |
| istio.mtls.mode | string | `"STRICT"` | STRICT = Allow only mutual TLS traffic, PERMISSIVE = Allow both plain text and mutual TLS traffic |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.ingressLabels.app | string | `"public-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.istioNamespaceSelector.ingress | string | `"istio-gateway"` |  |
| networkPolicies.istioNamespaceSelector.egress | string | `"istio-gateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| networkPolicies.additionalPolicies | list | `[]` |  |
| monitoring.enabled | bool | `false` |  |
| monitoring.namespace | string | `"monitoring"` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |
| bbtests.cypress.resources.requests.cpu | string | `"2"` |  |
| bbtests.cypress.resources.requests.memory | string | `"4Gi"` |  |
| bbtests.cypress.resources.limits.cpu | string | `"2"` |  |
| bbtests.cypress.resources.limits.memory | string | `"4Gi"` |  |
| bbtests.scripts.envs.URL | string | `"http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |
| global.imagePullSecrets | string | `nil` |  |
| global.images.neuvector_csp_pod.tag | string | `"latest"` |  |
| global.images.neuvector_csp_pod.image | string | `"neuvector-billing-azure-by-suse-llc"` |  |
| global.images.neuvector_csp_pod.registry | string | `"registry.suse.de/suse/sle-15-sp5/update/pubclouds/images"` |  |
| global.images.neuvector_csp_pod.imagePullPolicy | string | `"Always"` |  |
| global.images.controller.tag | string | `"5.4.3"` |  |
| global.images.controller.image | string | `"controller"` |  |
| global.images.controller.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.images.manager.tag | string | `"5.4.3"` |  |
| global.images.manager.image | string | `"manager"` |  |
| global.images.manager.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.images.enforcer.tag | string | `"5.4.3"` |  |
| global.images.enforcer.image | string | `"enforcer"` |  |
| global.images.enforcer.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| upstream | object | Upstream chart values for Neuvector core | Values to pass to [the upstream NeuVector core subchart](https://github.com/neuvector/neuvector-helm/blob/master/charts/core/values.yaml) |
| monitor.imagePullSecrets | string | `"private-registry"` |  |
| monitor.install | bool | `false` |  |
| monitor.serviceAccount | string | `"default"` |  |
| monitor.registry | string | `"registry1.dso.mil"` |  |
| monitor.exporter.enabled | bool | `false` |  |
| monitor.exporter.serviceMonitor.enabled | bool | `false` |  |
| monitor.exporter.svc.enabled | bool | `false` |  |
| monitor.exporter.image.repository | string | `"ironbank/neuvector/neuvector/prometheus-exporter"` |  |
| monitor.exporter.image.tag | string | `"1-1.0.0"` |  |
| monitor.exporter.image.imagePullPolicy | string | `"Always"` |  |
| monitor.exporter.containerSecurityContext.runAsUser | int | `1001` |  |
| monitor.exporter.containerSecurityContext.runAsGroup | int | `1001` |  |
| monitor.exporter.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._

