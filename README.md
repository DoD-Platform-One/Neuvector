# neuvector

![Version: 2.4.5-bb.6](https://img.shields.io/badge/Version-2.4.5--bb.6-informational?style=flat-square) ![AppVersion: 5.1.3](https://img.shields.io/badge/AppVersion-5.1.3-informational?style=flat-square)

Helm chart for NeuVector's core services

## Upstream References
* <https://neuvector.com>

## Learn More
* [Application Overview](docs/overview.md)
* [Other Documentation](docs/)

## Pre-Requisites

* Kubernetes Cluster deployed
* Kubernetes config installed in `~/.kube/config`
* Helm installed

Install Helm

https://helm.sh/docs/intro/install/

## Deployment

* Clone down the repository
* cd into directory
```bash
helm install neuvector chart/
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| openshift | bool | `false` |  |
| registry | string | `"registry1.dso.mil"` |  |
| tag | string | `"5.1.3"` |  |
| oem | string | `nil` |  |
| imagePullSecrets | string | `"private-registry"` |  |
| psp | bool | `false` |  |
| rbac | bool | `true` |  |
| serviceAccount | string | `"default"` |  |
| internal.certmanager.enabled | bool | `false` |  |
| internal.certmanager.secretname | string | `"neuvector-internal"` |  |
| controller.enabled | bool | `true` |  |
| controller.annotations | object | `{}` |  |
| controller.strategy.type | string | `"RollingUpdate"` |  |
| controller.strategy.rollingUpdate.maxSurge | int | `1` |  |
| controller.strategy.rollingUpdate.maxUnavailable | int | `0` |  |
| controller.image.repository | string | `"ironbank/neuvector/neuvector/controller"` |  |
| controller.image.hash | string | `nil` |  |
| controller.replicas | int | `3` |  |
| controller.disruptionbudget | int | `0` |  |
| controller.schedulerName | string | `nil` |  |
| controller.priorityClassName | string | `nil` |  |
| controller.podLabels | object | `{}` |  |
| controller.podAnnotations | object | `{}` |  |
| controller.containerSecurityContext.privileged | bool | `true` |  |
| controller.containerSecurityContext.runAsUser | int | `1000` |  |
| controller.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| controller.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| controller.env | list | `[]` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].weight | int | `100` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].key | string | `"app"` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].operator | string | `"In"` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values[0] | string | `"neuvector-controller-pod"` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.topologyKey | string | `"kubernetes.io/hostname"` |  |
| controller.tolerations | list | `[]` |  |
| controller.nodeSelector | object | `{}` |  |
| controller.apisvc.type | string | `nil` |  |
| controller.apisvc.annotations | object | `{}` |  |
| controller.apisvc.route.enabled | bool | `false` |  |
| controller.apisvc.route.termination | string | `"passthrough"` |  |
| controller.apisvc.route.host | string | `nil` |  |
| controller.apisvc.route.tls | string | `nil` |  |
| controller.ranchersso.enabled | bool | `false` |  |
| controller.sso.certificateAuthority.secretName | string | `""` |  |
| controller.pvc.enabled | bool | `false` |  |
| controller.pvc.existingClaim | bool | `false` |  |
| controller.pvc.accessModes[0] | string | `"ReadWriteMany"` |  |
| controller.pvc.storageClass | string | `nil` |  |
| controller.pvc.capacity | string | `nil` |  |
| controller.azureFileShare.enabled | bool | `false` |  |
| controller.azureFileShare.secretName | string | `nil` |  |
| controller.azureFileShare.shareName | string | `nil` |  |
| controller.certificate.secret | string | `nil` |  |
| controller.certificate.keyFile | string | `"tls.key"` |  |
| controller.certificate.pemFile | string | `"tls.pem"` |  |
| controller.internal.certificate.secret | string | `"neuvector-internal"` |  |
| controller.internal.certificate.keyFile | string | `"tls.key"` |  |
| controller.internal.certificate.pemFile | string | `"tls.crt"` |  |
| controller.internal.certificate.caFile | string | `"ca.crt"` |  |
| controller.federation.mastersvc.type | string | `nil` |  |
| controller.federation.mastersvc.ingress.enabled | bool | `false` |  |
| controller.federation.mastersvc.ingress.host | string | `nil` |  |
| controller.federation.mastersvc.ingress.ingressClassName | string | `""` |  |
| controller.federation.mastersvc.ingress.path | string | `"/"` |  |
| controller.federation.mastersvc.ingress.annotations."nginx.ingress.kubernetes.io/backend-protocol" | string | `"HTTPS"` |  |
| controller.federation.mastersvc.ingress.tls | bool | `false` |  |
| controller.federation.mastersvc.ingress.secretName | string | `nil` |  |
| controller.federation.mastersvc.annotations | object | `{}` |  |
| controller.federation.mastersvc.route.enabled | bool | `false` |  |
| controller.federation.mastersvc.route.termination | string | `"passthrough"` |  |
| controller.federation.mastersvc.route.host | string | `nil` |  |
| controller.federation.mastersvc.route.tls | string | `nil` |  |
| controller.federation.managedsvc.type | string | `nil` |  |
| controller.federation.managedsvc.ingress.enabled | bool | `false` |  |
| controller.federation.managedsvc.ingress.host | string | `nil` |  |
| controller.federation.managedsvc.ingress.ingressClassName | string | `""` |  |
| controller.federation.managedsvc.ingress.path | string | `"/"` |  |
| controller.federation.managedsvc.ingress.annotations."nginx.ingress.kubernetes.io/backend-protocol" | string | `"HTTPS"` |  |
| controller.federation.managedsvc.ingress.tls | bool | `false` |  |
| controller.federation.managedsvc.ingress.secretName | string | `nil` |  |
| controller.federation.managedsvc.annotations | object | `{}` |  |
| controller.federation.managedsvc.route.enabled | bool | `false` |  |
| controller.federation.managedsvc.route.termination | string | `"passthrough"` |  |
| controller.federation.managedsvc.route.host | string | `nil` |  |
| controller.federation.managedsvc.route.tls | string | `nil` |  |
| controller.ingress.enabled | bool | `false` |  |
| controller.ingress.host | string | `nil` |  |
| controller.ingress.ingressClassName | string | `""` |  |
| controller.ingress.path | string | `"/"` |  |
| controller.ingress.annotations."nginx.ingress.kubernetes.io/backend-protocol" | string | `"HTTPS"` |  |
| controller.ingress.tls | bool | `false` |  |
| controller.ingress.secretName | string | `nil` |  |
| controller.resources | object | `{}` |  |
| controller.configmap.enabled | bool | `false` |  |
| controller.configmap.data | string | `nil` |  |
| controller.secret.enabled | bool | `false` |  |
| controller.secret.data | object | `{}` |  |
| enforcer.enabled | bool | `true` |  |
| enforcer.image.repository | string | `"ironbank/neuvector/neuvector/enforcer"` |  |
| enforcer.image.hash | string | `nil` |  |
| enforcer.updateStrategy.type | string | `"RollingUpdate"` |  |
| enforcer.priorityClassName | string | `nil` |  |
| enforcer.podLabels | object | `{}` |  |
| enforcer.podAnnotations | object | `{}` |  |
| enforcer.securityContext.runAsNonRoot | bool | `true` |  |
| enforcer.securityContext.runAsUser | int | `1000` |  |
| enforcer.containerSecurityContext.privileged | bool | `true` |  |
| enforcer.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| enforcer.env | list | `[]` |  |
| enforcer.tolerations[0].effect | string | `"NoSchedule"` |  |
| enforcer.tolerations[0].key | string | `"node-role.kubernetes.io/master"` |  |
| enforcer.tolerations[1].effect | string | `"NoSchedule"` |  |
| enforcer.tolerations[1].key | string | `"node-role.kubernetes.io/control-plane"` |  |
| enforcer.resources | object | `{}` |  |
| enforcer.internal.certificate.secret | string | `"neuvector-internal"` |  |
| enforcer.internal.certificate.keyFile | string | `"tls.key"` |  |
| enforcer.internal.certificate.pemFile | string | `"tls.crt"` |  |
| enforcer.internal.certificate.caFile | string | `"ca.crt"` |  |
| manager.enabled | bool | `true` |  |
| manager.image.repository | string | `"ironbank/neuvector/neuvector/manager"` |  |
| manager.image.hash | string | `nil` |  |
| manager.priorityClassName | string | `nil` |  |
| manager.env.ssl | bool | `false` |  |
| manager.env.disableFipsInJava | bool | `true` |  |
| manager.svc.type | string | `"ClusterIP"` |  |
| manager.svc.loadBalancerIP | string | `nil` |  |
| manager.svc.annotations | object | `{}` |  |
| manager.route.enabled | bool | `true` |  |
| manager.route.termination | string | `"passthrough"` |  |
| manager.route.host | string | `nil` |  |
| manager.route.tls | string | `nil` |  |
| manager.certificate.secret | string | `nil` |  |
| manager.certificate.keyFile | string | `"tls.key"` |  |
| manager.certificate.pemFile | string | `"tls.pem"` |  |
| manager.ingress.enabled | bool | `false` |  |
| manager.ingress.host | string | `nil` |  |
| manager.ingress.ingressClassName | string | `""` |  |
| manager.ingress.path | string | `"/"` |  |
| manager.ingress.annotations."nginx.ingress.kubernetes.io/backend-protocol" | string | `"HTTPS"` |  |
| manager.ingress.tls | bool | `false` |  |
| manager.ingress.secretName | string | `nil` |  |
| manager.resources | object | `{}` |  |
| manager.affinity | object | `{}` |  |
| manager.podLabels | object | `{}` |  |
| manager.podAnnotations | object | `{}` |  |
| manager.containerSecurityContext.runAsUser | int | `1000` |  |
| manager.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| manager.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| manager.tolerations | list | `[]` |  |
| manager.nodeSelector | object | `{}` |  |
| manager.securityContext.runAsNonRoot | bool | `true` |  |
| manager.securityContext.runAsUser | int | `1000` |  |
| cve.updater.enabled | bool | `true` |  |
| cve.updater.secure | bool | `false` |  |
| cve.updater.image.repository | string | `"ironbank/big-bang/base"` |  |
| cve.updater.image.tag | string | `"2.0.0"` |  |
| cve.updater.image.hash | string | `nil` |  |
| cve.updater.schedule | string | `"0 0 * * *"` |  |
| cve.updater.priorityClassName | string | `nil` |  |
| cve.updater.podLabels | object | `{}` |  |
| cve.updater.podAnnotations | object | `{}` |  |
| cve.updater.nodeSelector | object | `{}` |  |
| cve.updater.securityContext.runAsUser | int | `1000` |  |
| cve.updater.securityContext.runAsNonRoot | bool | `true` |  |
| cve.updater.containerSecurityContext.runAsUser | int | `1000` |  |
| cve.updater.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| cve.updater.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| cve.scanner.enabled | bool | `true` |  |
| cve.scanner.replicas | int | `3` |  |
| cve.scanner.dockerPath | string | `""` |  |
| cve.scanner.strategy.type | string | `"RollingUpdate"` |  |
| cve.scanner.strategy.rollingUpdate.maxSurge | int | `1` |  |
| cve.scanner.strategy.rollingUpdate.maxUnavailable | int | `0` |  |
| cve.scanner.image.repository | string | `"ironbank/neuvector/neuvector/scanner"` |  |
| cve.scanner.image.tag | int | `5` |  |
| cve.scanner.image.hash | string | `nil` |  |
| cve.scanner.priorityClassName | string | `nil` |  |
| cve.scanner.resources | object | `{}` |  |
| cve.scanner.affinity | object | `{}` |  |
| cve.scanner.podLabels | object | `{}` |  |
| cve.scanner.podAnnotations | object | `{}` |  |
| cve.scanner.env | list | `[]` |  |
| cve.scanner.tolerations | list | `[]` |  |
| cve.scanner.nodeSelector | object | `{}` |  |
| cve.scanner.securityContext.runAsNonRoot | bool | `true` |  |
| cve.scanner.securityContext.runAsUser | int | `1000` |  |
| cve.scanner.internal.certificate.secret | string | `"neuvector-internal"` |  |
| cve.scanner.internal.certificate.keyFile | string | `"tls.key"` |  |
| cve.scanner.internal.certificate.pemFile | string | `"tls.crt"` |  |
| cve.scanner.internal.certificate.caFile | string | `"ca.crt"` |  |
| cve.scanner.containerSecurityContext.runAsUser | int | `1000` |  |
| cve.scanner.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| cve.scanner.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| docker.path | string | `"/var/run/docker.sock"` |  |
| resources | object | `{}` |  |
| k3s.enabled | bool | `false` |  |
| k3s.runtimePath | string | `"/run/k3s/containerd/containerd.sock"` |  |
| bottlerocket.enabled | bool | `false` |  |
| bottlerocket.runtimePath | string | `"/run/dockershim.sock"` |  |
| containerd.enabled | bool | `false` |  |
| containerd.path | string | `"/var/run/containerd/containerd.sock"` |  |
| crio.enabled | bool | `false` |  |
| crio.path | string | `"/var/run/crio/crio.sock"` |  |
| admissionwebhook.type | string | `"ClusterIP"` |  |
| crdwebhook.enabled | bool | `true` |  |
| crdwebhook.type | string | `"ClusterIP"` |  |
| domain | string | `"bigbang.dev"` |  |
| istio.enabled | bool | `false` |  |
| istio.injection | string | `"disabled"` |  |
| istio.neuvector.enabled | bool | `true` |  |
| istio.neuvector.annotations | object | `{}` |  |
| istio.neuvector.labels | object | `{}` |  |
| istio.neuvector.gateways[0] | string | `"istio-system/main"` |  |
| istio.neuvector.hosts[0] | string | `"neuvector.{{ .Values.domain }}"` |  |
| istio.mtls | object | `{"mode":"STRICT"}` | Default neuvector peer authentication |
| istio.mtls.mode | string | `"STRICT"` | STRICT = Allow only mutual TLS traffic, PERMISSIVE = Allow both plain text and mutual TLS traffic |
| monitoring.enabled | bool | `false` |  |
| monitoring.namespace | string | `"monitoring"` |  |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.ingressLabels.app | string | `"istio-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| monitor.imagePullSecrets | string | `"private-registry"` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |
| bbtests.scripts.envs.URL | string | `"http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
