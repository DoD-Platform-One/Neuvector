<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# neuvector

![Version: 2.8.6-bb.2](https://img.shields.io/badge/Version-2.8.6--bb.2-informational?style=flat-square) ![AppVersion: 5.4.4](https://img.shields.io/badge/AppVersion-5.4.4-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

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

<https://helm.sh/docs/intro/install/>

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
| upstream.nameOverride | string | `"neuvector"` |  |
| upstream.fullnameOverride | string | `"neuvector-neuvector"` |  |
| upstream.openshift | bool | `false` |  |
| upstream.registry | string | `"registry1.dso.mil"` |  |
| upstream.tag | string | `"5.4.4"` |  |
| upstream.imagePullSecrets | string | `"private-registry"` |  |
| upstream.crdwebhook.enabled | bool | `false` |  |
| upstream.controller.enabled | bool | `true` |  |
| upstream.controller.image.repository | string | `"ironbank/neuvector/neuvector/controller"` |  |
| upstream.controller.image.imagePullPolicy | string | `"Always"` |  |
| upstream.controller.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.controller.containerSecurityContext.privileged | bool | `true` |  |
| upstream.controller.containerSecurityContext.runAsUser | int | `1000` |  |
| upstream.controller.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| upstream.controller.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| upstream.controller.certupgrader.imagePullPolicy | string | `"Always"` |  |
| upstream.controller.certupgrader.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.controller.certupgrader.podAnnotations."traffic.sidecar.istio.io/excludeOutboundPorts" | string | `"18500"` |  |
| upstream.controller.certupgrader.securityContext.runAsNonRoot | bool | `true` |  |
| upstream.controller.certupgrader.securityContext.runAsUser | int | `1000` |  |
| upstream.controller.certupgrader.securityContext.runAsGroup | int | `1000` |  |
| upstream.controller.certupgrader.securityContext.fsGroup | int | `1000` |  |
| upstream.controller.certupgrader.containerSecurityContext.runAsUser | int | `1000` |  |
| upstream.controller.certupgrader.containerSecurityContext.runAsGroup | int | `1000` |  |
| upstream.controller.certupgrader.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| upstream.controller.certupgrader.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| upstream.controller.apisvc.type | string | `"ClusterIP"` |  |
| upstream.controller.apisvc.annotations | object | `{}` |  |
| upstream.controller.apisvc.nodePort | string | `nil` |  |
| upstream.controller.prime.enabled | bool | `false` |  |
| upstream.controller.prime.image.repository | string | `"neuvector/compliance-config"` |  |
| upstream.controller.prime.image.tag | string | `"1.0.5"` |  |
| upstream.enforcer.enabled | bool | `true` |  |
| upstream.enforcer.image.repository | string | `"ironbank/neuvector/neuvector/enforcer"` |  |
| upstream.enforcer.image.imagePullPolicy | string | `"Always"` |  |
| upstream.enforcer.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.enforcer.containerSecurityContext.privileged | bool | `true` |  |
| upstream.enforcer.containerSecurityContext.runAsGroup | int | `1000` |  |
| upstream.enforcer.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| upstream.manager.enabled | bool | `true` |  |
| upstream.manager.image.repository | string | `"ironbank/neuvector/neuvector/manager"` |  |
| upstream.manager.image.imagePullPolicy | string | `"Always"` |  |
| upstream.manager.env.ssl | bool | `false` |  |
| upstream.manager.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.manager.containerSecurityContext.runAsUser | int | `1000` |  |
| upstream.manager.containerSecurityContext.runAsGroup | int | `1000` |  |
| upstream.manager.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| upstream.manager.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| upstream.manager.securityContext.runAsNonRoot | bool | `true` |  |
| upstream.manager.securityContext.runAsUser | int | `1000` |  |
| upstream.manager.securityContext.runAsGroup | int | `1000` |  |
| upstream.manager.securityContext.fsGroup | int | `1000` |  |
| upstream.cve.adapter.enabled | bool | `false` |  |
| upstream.cve.adapter.image.repository | string | `"neuvector/registry-adapter"` |  |
| upstream.cve.adapter.image.tag | string | `"0.1.7"` |  |
| upstream.cve.adapter.image."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.cve.adapter.securityContext.runAsUser | int | `1000` |  |
| upstream.cve.adapter.securityContext.runAsGroup | int | `1000` |  |
| upstream.cve.adapter.securityContext.fsGroup | int | `1000` |  |
| upstream.cve.adapter.securityContext.runAsNonRoot | bool | `true` |  |
| upstream.cve.updater.enabled | bool | `true` |  |
| upstream.cve.updater.secure | bool | `false` |  |
| upstream.cve.updater.cacert | string | `"/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"` |  |
| upstream.cve.updater.image.registry | string | `"registry1.dso.mil"` |  |
| upstream.cve.updater.image.repository | string | `"ironbank/big-bang/base"` |  |
| upstream.cve.updater.image.imagePullPolicy | string | `"Always"` |  |
| upstream.cve.updater.image.tag | string | `"2.1.0"` |  |
| upstream.cve.updater.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.cve.updater.securityContext.runAsUser | int | `1000` |  |
| upstream.cve.updater.securityContext.runAsGroup | int | `1000` |  |
| upstream.cve.updater.securityContext.fsGroup | int | `1000` |  |
| upstream.cve.updater.securityContext.runAsNonRoot | bool | `true` |  |
| upstream.cve.updater.containerSecurityContext.runAsUser | int | `1000` |  |
| upstream.cve.updater.containerSecurityContext.runAsGroup | int | `1000` |  |
| upstream.cve.updater.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| upstream.cve.updater.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| upstream.cve.scanner.enabled | bool | `true` |  |
| upstream.cve.scanner.image.repository | string | `"ironbank/neuvector/neuvector/scanner"` |  |
| upstream.cve.scanner.image.imagePullPolicy | string | `"Always"` |  |
| upstream.cve.scanner.image.tag | string | `"6"` |  |
| upstream.cve.scanner.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| upstream.cve.scanner.runAsUser | string | `nil` |  |
| upstream.cve.scanner.securityContext.runAsUser | int | `1000` |  |
| upstream.cve.scanner.securityContext.runAsGroup | int | `1000` |  |
| upstream.cve.scanner.securityContext.fsGroup | int | `1000` |  |
| upstream.cve.scanner.securityContext.runAsNonRoot | bool | `true` |  |
| upstream.cve.scanner.containerSecurityContext.runAsUser | int | `1000` |  |
| upstream.cve.scanner.containerSecurityContext.runAsGroup | int | `1000` |  |
| upstream.cve.scanner.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| upstream.cve.scanner.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
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
