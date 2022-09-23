# neuvector

![Version: 2.2.2-bb.0](https://img.shields.io/badge/Version-2.2.2--bb--0-informational?style=flat-square) ![AppVersion: 5.0.2](https://img.shields.io/badge/AppVersion-5.0.2-informational?style=flat-square)

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
| registry | string | `"registry.dso.mil"` |  |
| tag | string | `"5.0.2"` |  |
| oem | string | `nil` |  |
| imagePullSecrets | string | `nil` |  |
| psp | bool | `false` |  |
| rbac | bool | `true` |  |
| serviceAccount | string | `"default"` |  |
| controller.enabled | bool | `true` |  |
| controller.annotations | object | `{}` |  |
| controller.strategy.type | string | `"RollingUpdate"` |  |
| controller.strategy.rollingUpdate.maxSurge | int | `1` |  |
| controller.strategy.rollingUpdate.maxUnavailable | int | `0` |  |
| controller.image.repository | string | `"platform-one/big-bang/apps/sandbox/neuvector/controller"` |  |
| controller.image.hash | string | `nil` |  |
| controller.replicas | int | `3` |  |
| controller.disruptionbudget | int | `0` |  |
| controller.schedulerName | string | `nil` |  |
| controller.priorityClassName | string | `nil` |  |
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
| controller.pvc.enabled | bool | `false` |  |
| controller.pvc.accessModes[0] | string | `"ReadWriteMany"` |  |
| controller.pvc.storageClass | string | `nil` |  |
| controller.pvc.capacity | string | `nil` |  |
| controller.azureFileShare.enabled | bool | `false` |  |
| controller.azureFileShare.secretName | string | `nil` |  |
| controller.azureFileShare.shareName | string | `nil` |  |
| controller.certificate.secret | string | `nil` |  |
| controller.certificate.keyFile | string | `"tls.key"` |  |
| controller.certificate.pemFile | string | `"tls.pem"` |  |
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
| enforcer.image.repository | string | `"platform-one/big-bang/apps/sandbox/neuvector/enforcer"` |  |
| enforcer.image.hash | string | `nil` |  |
| enforcer.priorityClassName | string | `nil` |  |
| enforcer.tolerations[0].effect | string | `"NoSchedule"` |  |
| enforcer.tolerations[0].key | string | `"node-role.kubernetes.io/master"` |  |
| enforcer.resources | object | `{}` |  |
| manager.enabled | bool | `true` |  |
| manager.image.repository | string | `"platform-one/big-bang/apps/sandbox/neuvector/manager"` |  |
| manager.image.hash | string | `nil` |  |
| manager.priorityClassName | string | `nil` |  |
| manager.env.ssl | bool | `true` |  |
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
| manager.tolerations | list | `[]` |  |
| manager.nodeSelector | object | `{}` |  |
| manager.runAsUser | string | `nil` |  |
| cve.updater.enabled | bool | `true` |  |
| cve.updater.secure | bool | `false` |  |
| cve.updater.image.repository | string | `"platform-one/big-bang/apps/sandbox/neuvector/updater"` |  |
| cve.updater.image.tag | string | `"latest"` |  |
| cve.updater.image.hash | string | `nil` |  |
| cve.updater.schedule | string | `"0 0 * * *"` |  |
| cve.updater.priorityClassName | string | `nil` |  |
| cve.updater.runAsUser | string | `nil` |  |
| cve.scanner.enabled | bool | `true` |  |
| cve.scanner.replicas | int | `3` |  |
| cve.scanner.dockerPath | string | `""` |  |
| cve.scanner.strategy.type | string | `"RollingUpdate"` |  |
| cve.scanner.strategy.rollingUpdate.maxSurge | int | `1` |  |
| cve.scanner.strategy.rollingUpdate.maxUnavailable | int | `0` |  |
| cve.scanner.image.repository | string | `"platform-one/big-bang/apps/sandbox/neuvector/scanner"` |  |
| cve.scanner.image.tag | string | `"latest"` |  |
| cve.scanner.image.hash | string | `nil` |  |
| cve.scanner.priorityClassName | string | `nil` |  |
| cve.scanner.resources | object | `{}` |  |
| cve.scanner.affinity | object | `{}` |  |
| cve.scanner.tolerations | list | `[]` |  |
| cve.scanner.nodeSelector | object | `{}` |  |
| cve.scanner.runAsUser | string | `nil` |  |
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
| istio.neuvector.enabled | bool | `true` |  |
| istio.neuvector.annotations | object | `{}` |  |
| istio.neuvector.labels | object | `{}` |  |
| istio.neuvector.gateways[0] | string | `"istio-system/main"` |  |
| istio.neuvector.hosts[0] | string | `"neuvector.{{ .Values.domain }}"` |  |
| istio.mtls | object | `{"mode":"STRICT"}` | Default neuvector peer authentication |
| istio.mtls.mode | string | `"STRICT"` | STRICT = Allow only mutual TLS traffic, PERMISSIVE = Allow both plain text and mutual TLS traffic |
| monitoring.enabled | bool | `false` |  |
| networkPolicies.enabled | bool | `false` |  |
| networkPolicies.ingressLabels.app | string | `"istio-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| networkPolicies.egressHttps.enabled | bool | `true` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"https://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |
| bbtests.scripts.envs.URL | string | `"https://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.
