<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# neuvector

![Version: 2.8.10-bb.1](https://img.shields.io/badge/Version-2.8.10--bb.1-informational?style=flat-square) ![AppVersion: 5.4.8](https://img.shields.io/badge/AppVersion-5.4.8-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

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
| istio.mtls.mode | string | `"STRICT"` |  |
| istio.sidecar.enabled | bool | `true` |  |
| istio.sidecar.outboundTrafficPolicyMode | string | `"REGISTRY_ONLY"` |  |
| istio.authorizationPolicies.enabled | bool | `false` |  |
| istio.authorizationPolicies.generateFromNetpol | bool | `true` |  |
| routes.inbound.neuvector.enabled | bool | `true` |  |
| routes.inbound.neuvector.gateways[0] | string | `"istio-system/public"` |  |
| routes.inbound.neuvector.hosts[0] | string | `"neuvector.{{ .Values.domain }}"` |  |
| routes.inbound.neuvector.service | string | `"neuvector-service-webui"` |  |
| routes.inbound.neuvector.port | int | `8443` |  |
| routes.inbound.neuvector.selector.app | string | `"neuvector-manager-pod"` |  |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.egress.from.controller.podSelector.matchLabels.app | string | `"neuvector-controller-pod"` |  |
| networkPolicies.egress.from.controller.to.definition.kubeAPI | bool | `true` |  |
| networkPolicies.egress.from.updater.podSelector.matchLabels.app | string | `"neuvector-updater-pod"` |  |
| networkPolicies.egress.from.updater.to.definition.kubeAPI | bool | `true` |  |
| networkPolicies.egress.from.cert-upgrader.podSelector.matchLabels.app | string | `"neuvector-cert-upgrader-pod"` |  |
| networkPolicies.egress.from.cert-upgrader.to.definition.kubeAPI | bool | `true` |  |
| networkPolicies.egress.from.enforcer.podSelector.matchLabels.app | string | `"neuvector-enforcer-pod"` |  |
| networkPolicies.egress.from.enforcer.to.definition.kubeAPI | bool | `true` |  |
| networkPolicies.egress.from.scanner.podSelector.matchLabels.app | string | `"neuvector-scanner-pod"` |  |
| networkPolicies.egress.from.scanner.to.definition.kubeAPI | bool | `true` |  |
| networkPolicies.ingress.to.exporter:8068.podSelector.matchLabels.app | string | `"neuvector-prometheus-exporter-pod"` |  |
| networkPolicies.ingress.to.exporter:8068.from.k8s.monitoring/prometheus | bool | `true` |  |
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
| global.images.controller.tag | string | `"5.4.7"` |  |
| global.images.controller.image | string | `"controller"` |  |
| global.images.controller.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.images.manager.tag | string | `"5.4.7"` |  |
| global.images.manager.image | string | `"manager"` |  |
| global.images.manager.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.images.enforcer.tag | string | `"5.4.7"` |  |
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

