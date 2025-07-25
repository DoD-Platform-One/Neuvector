<!-- Warning: Do not manually edit this file. See notes on gluon + helm-docs at the end of this file for more information. -->
# neuvector

![Version: 2.8.6-bb.0](https://img.shields.io/badge/Version-2.8.6--bb.0-informational?style=flat-square) ![AppVersion: 5.4.4](https://img.shields.io/badge/AppVersion-5.4.4-informational?style=flat-square) ![Maintenance Track: bb_integrated](https://img.shields.io/badge/Maintenance_Track-bb_integrated-green?style=flat-square)

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
| openshift | bool | `false` |  |
| registry | string | `"registry1.dso.mil"` |  |
| tag | string | `"5.4.4"` |  |
| oem | string | `nil` |  |
| imagePullSecrets | string | `"private-registry"` |  |
| psp | bool | `false` |  |
| rbac | bool | `true` |  |
| serviceAccount | string | `"default"` |  |
| leastPrivilege | bool | `false` |  |
| global.cattle.url | string | `nil` |  |
| global.azure.enabled | bool | `false` |  |
| global.azure.identity.clientId | string | `"DONOTMODIFY"` |  |
| global.azure.marketplace.planId | string | `"DONOTMODIFY"` |  |
| global.azure.extension.resourceId | string | `"DONOTMODIFY"` |  |
| global.azure.serviceAccount | string | `"csp"` |  |
| global.azure.imagePullSecrets | string | `nil` |  |
| global.azure.images.neuvector_csp_pod.tag | string | `"latest"` |  |
| global.azure.images.neuvector_csp_pod.image | string | `"neuvector-billing-azure-by-suse-llc"` |  |
| global.azure.images.neuvector_csp_pod.registry | string | `"registry.suse.de/suse/sle-15-sp5/update/pubclouds/images"` |  |
| global.azure.images.neuvector_csp_pod.imagePullPolicy | string | `"Always"` |  |
| global.azure.images.controller.tag | string | `"5.4.3"` |  |
| global.azure.images.controller.image | string | `"controller"` |  |
| global.azure.images.controller.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.azure.images.manager.tag | string | `"5.4.3"` |  |
| global.azure.images.manager.image | string | `"manager"` |  |
| global.azure.images.manager.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.azure.images.enforcer.tag | string | `"5.4.3"` |  |
| global.azure.images.enforcer.image | string | `"enforcer"` |  |
| global.azure.images.enforcer.registry | string | `"registry1.dso.mil/ironbank/neuvector/neuvector"` |  |
| global.aws.enabled | bool | `false` |  |
| global.aws.accountNumber | string | `""` |  |
| global.aws.roleName | string | `""` |  |
| global.aws.serviceAccount | string | `"csp"` |  |
| global.aws.annotations | object | `{}` |  |
| global.aws.imagePullSecrets | string | `nil` |  |
| global.aws.image.digest | string | `""` |  |
| global.aws.image.repository | string | `"neuvector/neuvector-csp-adapter"` |  |
| global.aws.image.tag | string | `"latest"` |  |
| global.aws.image.imagePullPolicy | string | `"Always"` |  |
| bootstrapPassword | string | `""` |  |
| autoGenerateCert | bool | `true` |  |
| defaultValidityPeriod | int | `365` |  |
| internal.certmanager.enabled | bool | `false` |  |
| internal.certmanager.secretname | string | `"neuvector-internal"` |  |
| internal.autoGenerateCert | bool | `true` |  |
| internal.autoRotateCert | bool | `true` |  |
| controller.enabled | bool | `true` |  |
| controller.annotations | object | `{}` |  |
| controller.strategy.type | string | `"RollingUpdate"` |  |
| controller.strategy.rollingUpdate.maxSurge | int | `1` |  |
| controller.strategy.rollingUpdate.maxUnavailable | int | `0` |  |
| controller.image.repository | string | `"ironbank/neuvector/neuvector/controller"` |  |
| controller.image.imagePullPolicy | string | `"Always"` |  |
| controller.image.hash | string | `nil` |  |
| controller.replicas | int | `3` |  |
| controller.disruptionbudget | int | `0` |  |
| controller.schedulerName | string | `nil` |  |
| controller.priorityClassName | string | `nil` |  |
| controller.podLabels | object | `{}` |  |
| controller.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| controller.containerSecurityContext.privileged | bool | `true` |  |
| controller.containerSecurityContext.runAsUser | int | `1000` |  |
| controller.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| controller.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| controller.searchRegistries | string | `nil` |  |
| controller.env | list | `[]` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].weight | int | `100` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].key | string | `"app"` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].operator | string | `"In"` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values[0] | string | `"neuvector-controller-pod"` |  |
| controller.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.topologyKey | string | `"kubernetes.io/hostname"` |  |
| controller.tolerations | list | `[]` |  |
| controller.topologySpreadConstraints | list | `[]` |  |
| controller.nodeSelector | object | `{}` |  |
| controller.apisvc.type | string | `"ClusterIP"` |  |
| controller.apisvc.annotations | object | `{}` |  |
| controller.apisvc.nodePort | string | `nil` |  |
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
| controller.certificate.secret | string | `""` |  |
| controller.certificate.keyFile | string | `"tls.key"` |  |
| controller.certificate.pemFile | string | `"tls.pem"` |  |
| controller.internal.certificate.secret | string | `""` |  |
| controller.internal.certificate.keyFile | string | `"tls.key"` |  |
| controller.internal.certificate.pemFile | string | `"tls.crt"` |  |
| controller.internal.certificate.caFile | string | `"ca.crt"` |  |
| controller.federation.mastersvc.type | string | `nil` |  |
| controller.federation.mastersvc.loadBalancerIP | string | `nil` |  |
| controller.federation.mastersvc.clusterIP | string | `nil` |  |
| controller.federation.mastersvc.nodePort | string | `nil` |  |
| controller.federation.mastersvc.externalTrafficPolicy | string | `nil` |  |
| controller.federation.mastersvc.internalTrafficPolicy | string | `nil` |  |
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
| controller.federation.managedsvc.loadBalancerIP | string | `nil` |  |
| controller.federation.managedsvc.clusterIP | string | `nil` |  |
| controller.federation.managedsvc.nodePort | string | `nil` |  |
| controller.federation.managedsvc.externalTrafficPolicy | string | `nil` |  |
| controller.federation.managedsvc.internalTrafficPolicy | string | `nil` |  |
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
| controller.secret.data."userinitcfg.yaml".users[0].Fullname | string | `"admin"` |  |
| controller.secret.data."userinitcfg.yaml".users[0].Password | string | `nil` |  |
| controller.secret.data."userinitcfg.yaml".users[0].Role | string | `"admin"` |  |
| controller.certupgrader.env | list | `[]` |  |
| controller.certupgrader.schedule | string | `""` |  |
| controller.certupgrader.imagePullPolicy | string | `"Always"` |  |
| controller.certupgrader.timeout | int | `3600` |  |
| controller.certupgrader.priorityClassName | string | `nil` |  |
| controller.certupgrader.podLabels | object | `{}` |  |
| controller.certupgrader.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| controller.certupgrader.podAnnotations."traffic.sidecar.istio.io/excludeOutboundPorts" | string | `"18500"` |  |
| controller.certupgrader.tolerations | list | `[]` |  |
| controller.certupgrader.nodeSelector | object | `{}` |  |
| controller.certupgrader.securityContext.runAsNonRoot | bool | `true` |  |
| controller.certupgrader.securityContext.runAsUser | int | `1000` |  |
| controller.certupgrader.securityContext.runAsGroup | int | `1000` |  |
| controller.certupgrader.securityContext.fsGroup | int | `1000` |  |
| controller.certupgrader.containerSecurityContext.runAsUser | int | `1000` |  |
| controller.certupgrader.containerSecurityContext.runAsGroup | int | `1000` |  |
| controller.certupgrader.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| controller.certupgrader.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| controller.prime.enabled | bool | `false` |  |
| controller.prime.image.repository | string | `"neuvector/compliance-config"` |  |
| controller.prime.image.tag | string | `"1.0.5"` |  |
| controller.prime.image.hash | string | `nil` |  |
| enforcer.enabled | bool | `true` |  |
| enforcer.image.repository | string | `"ironbank/neuvector/neuvector/enforcer"` |  |
| enforcer.image.imagePullPolicy | string | `"Always"` |  |
| enforcer.image.hash | string | `nil` |  |
| enforcer.updateStrategy.type | string | `"RollingUpdate"` |  |
| enforcer.priorityClassName | string | `nil` |  |
| enforcer.podLabels | object | `{}` |  |
| enforcer.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| enforcer.containerSecurityContext.privileged | bool | `true` |  |
| enforcer.containerSecurityContext.runAsGroup | int | `1000` |  |
| enforcer.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| enforcer.env | list | `[]` |  |
| enforcer.tolerations[0].effect | string | `"NoSchedule"` |  |
| enforcer.tolerations[0].key | string | `"node-role.kubernetes.io/master"` |  |
| enforcer.tolerations[1].effect | string | `"NoSchedule"` |  |
| enforcer.tolerations[1].key | string | `"node-role.kubernetes.io/control-plane"` |  |
| enforcer.resources | object | `{}` |  |
| enforcer.internal.certificate.secret | string | `""` |  |
| enforcer.internal.certificate.keyFile | string | `"tls.key"` |  |
| enforcer.internal.certificate.pemFile | string | `"tls.crt"` |  |
| enforcer.internal.certificate.caFile | string | `"ca.crt"` |  |
| manager.enabled | bool | `true` |  |
| manager.image.repository | string | `"ironbank/neuvector/neuvector/manager"` |  |
| manager.image.imagePullPolicy | string | `"Always"` |  |
| manager.image.hash | string | `nil` |  |
| manager.priorityClassName | string | `nil` |  |
| manager.env.ssl | bool | `false` |  |
| manager.env.envs[0].name | string | `"JDK_JAVA_OPTIONS"` |  |
| manager.env.envs[0].value | string | `"-Dcom.redhat.fips=false"` |  |
| manager.svc.type | string | `"ClusterIP"` |  |
| manager.svc.nodePort | string | `nil` |  |
| manager.svc.loadBalancerIP | string | `nil` |  |
| manager.svc.annotations | object | `{}` |  |
| manager.route.enabled | bool | `true` |  |
| manager.route.termination | string | `"passthrough"` |  |
| manager.route.host | string | `nil` |  |
| manager.route.tls | string | `nil` |  |
| manager.certificate.secret | string | `""` |  |
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
| manager.topologySpreadConstraints | list | `[]` |  |
| manager.affinity | object | `{}` |  |
| manager.podLabels | object | `{}` |  |
| manager.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| manager.containerSecurityContext.runAsUser | int | `1000` |  |
| manager.containerSecurityContext.runAsGroup | int | `1000` |  |
| manager.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| manager.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| manager.tolerations | list | `[]` |  |
| manager.nodeSelector | object | `{}` |  |
| manager.securityContext.runAsNonRoot | bool | `true` |  |
| manager.securityContext.runAsUser | int | `1000` |  |
| manager.securityContext.runAsGroup | int | `1000` |  |
| manager.securityContext.fsGroup | int | `1000` |  |
| manager.probes.enabled | bool | `false` |  |
| manager.probes.timeout | int | `1` |  |
| manager.probes.periodSeconds | int | `10` |  |
| manager.probes.startupFailureThreshold | int | `30` |  |
| cve.adapter.enabled | bool | `false` |  |
| cve.adapter.image.repository | string | `"neuvector/registry-adapter"` |  |
| cve.adapter.image.tag | string | `"0.1.7"` |  |
| cve.adapter.image.hash | string | `nil` |  |
| cve.adapter.priorityClassName | string | `nil` |  |
| cve.adapter.resources | object | `{}` |  |
| cve.adapter.affinity | object | `{}` |  |
| cve.adapter.podLabels | object | `{}` |  |
| cve.adapter.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| cve.adapter.env | list | `[]` |  |
| cve.adapter.tolerations | list | `[]` |  |
| cve.adapter.nodeSelector | object | `{}` |  |
| cve.adapter.securityContext.runAsUser | int | `1000` |  |
| cve.adapter.securityContext.runAsGroup | int | `1000` |  |
| cve.adapter.securityContext.fsGroup | int | `1000` |  |
| cve.adapter.securityContext.runAsNonRoot | bool | `true` |  |
| cve.adapter.certificate.secret | string | `""` |  |
| cve.adapter.certificate.keyFile | string | `"tls.key"` |  |
| cve.adapter.certificate.pemFile | string | `"tls.crt"` |  |
| cve.adapter.harbor.protocol | string | `"https"` |  |
| cve.adapter.harbor.secretName | string | `nil` |  |
| cve.adapter.svc.type | string | `"ClusterIP"` |  |
| cve.adapter.svc.loadBalancerIP | string | `nil` |  |
| cve.adapter.svc.annotations | object | `{}` |  |
| cve.adapter.route.enabled | bool | `true` |  |
| cve.adapter.route.termination | string | `"passthrough"` |  |
| cve.adapter.route.host | string | `nil` |  |
| cve.adapter.route.tls | string | `nil` |  |
| cve.adapter.ingress.enabled | bool | `false` |  |
| cve.adapter.ingress.host | string | `nil` |  |
| cve.adapter.ingress.ingressClassName | string | `""` |  |
| cve.adapter.ingress.path | string | `"/"` |  |
| cve.adapter.ingress.annotations."nginx.ingress.kubernetes.io/backend-protocol" | string | `"HTTPS"` |  |
| cve.adapter.ingress.tls | bool | `false` |  |
| cve.adapter.ingress.secretName | string | `nil` |  |
| cve.adapter.internal.certificate.secret | string | `""` |  |
| cve.adapter.internal.certificate.keyFile | string | `"tls.key"` |  |
| cve.adapter.internal.certificate.pemFile | string | `"tls.crt"` |  |
| cve.adapter.internal.certificate.caFile | string | `"ca.crt"` |  |
| cve.updater.enabled | bool | `true` |  |
| cve.updater.secure | bool | `false` |  |
| cve.updater.cacert | string | `"/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"` |  |
| cve.updater.image.registry | string | `"registry1.dso.mil"` |  |
| cve.updater.image.repository | string | `"ironbank/big-bang/base"` |  |
| cve.updater.image.imagePullPolicy | string | `"Always"` |  |
| cve.updater.image.tag | string | `"2.1.0"` |  |
| cve.updater.image.hash | string | `nil` |  |
| cve.updater.schedule | string | `"0 0 * * *"` |  |
| cve.updater.priorityClassName | string | `nil` |  |
| cve.updater.resources | object | `{}` |  |
| cve.updater.podLabels | object | `{}` |  |
| cve.updater.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| cve.updater.tolerations | list | `[]` |  |
| cve.updater.nodeSelector | object | `{}` |  |
| cve.updater.securityContext.runAsUser | int | `1000` |  |
| cve.updater.securityContext.runAsGroup | int | `1000` |  |
| cve.updater.securityContext.fsGroup | int | `1000` |  |
| cve.updater.securityContext.runAsNonRoot | bool | `true` |  |
| cve.updater.containerSecurityContext.runAsUser | int | `1000` |  |
| cve.updater.containerSecurityContext.runAsGroup | int | `1000` |  |
| cve.updater.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| cve.updater.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| cve.scanner.enabled | bool | `true` |  |
| cve.scanner.replicas | int | `3` |  |
| cve.scanner.dockerPath | string | `""` |  |
| cve.scanner.strategy.type | string | `"RollingUpdate"` |  |
| cve.scanner.strategy.rollingUpdate.maxSurge | int | `1` |  |
| cve.scanner.strategy.rollingUpdate.maxUnavailable | int | `0` |  |
| cve.scanner.image.repository | string | `"ironbank/neuvector/neuvector/scanner"` |  |
| cve.scanner.image.imagePullPolicy | string | `"Always"` |  |
| cve.scanner.image.tag | string | `"6"` |  |
| cve.scanner.image.hash | string | `nil` |  |
| cve.scanner.priorityClassName | string | `nil` |  |
| cve.scanner.resources | object | `{}` |  |
| cve.scanner.topologySpreadConstraints | list | `[]` |  |
| cve.scanner.affinity | object | `{}` |  |
| cve.scanner.podLabels | object | `{}` |  |
| cve.scanner.podAnnotations."traffic.sidecar.istio.io/excludeInboundPorts" | string | `"18500"` |  |
| cve.scanner.env | list | `[]` |  |
| cve.scanner.tolerations | list | `[]` |  |
| cve.scanner.nodeSelector | object | `{}` |  |
| cve.scanner.runAsUser | int | `1000` |  |
| cve.scanner.internal.certificate.secret | string | `""` |  |
| cve.scanner.internal.certificate.keyFile | string | `"tls.key"` |  |
| cve.scanner.internal.certificate.pemFile | string | `"tls.crt"` |  |
| cve.scanner.internal.certificate.caFile | string | `"ca.crt"` |  |
| cve.scanner.containerSecurityContext.runAsUser | int | `1000` |  |
| cve.scanner.containerSecurityContext.runAsGroup | int | `1000` |  |
| cve.scanner.containerSecurityContext.runAsNonRoot | bool | `true` |  |
| cve.scanner.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| cve.scanner.volumes | string | `nil` |  |
| cve.scanner.volumeMounts | string | `nil` |  |
| resources | object | `{}` |  |
| runtimePath | string | `nil` |  |
| docker.path | string | `"/var/run/docker.sock"` |  |
| k3s.enabled | bool | `false` |  |
| k3s.runtimePath | string | `"/run/k3s/containerd/containerd.sock"` |  |
| bottlerocket.enabled | bool | `false` |  |
| bottlerocket.runtimePath | string | `"/run/dockershim.sock"` |  |
| containerd.enabled | bool | `false` |  |
| containerd.path | string | `"/var/run/containerd/containerd.sock"` |  |
| crio.enabled | bool | `false` |  |
| crio.path | string | `"/var/run/crio/crio.sock"` |  |
| admissionwebhook.type | string | `"ClusterIP"` |  |
| crdwebhooksvc.enabled | bool | `true` |  |
| crdwebhook.enabled | bool | `true` |  |
| crdwebhook.type | string | `"ClusterIP"` |  |
| lease.enabled | bool | `true` |  |
| monitor.imagePullSecrets | string | `"private-registry"` |  |
| monitor.install | bool | `false` |  |
| monitor.serviceAccount | string | `"default"` |  |
| monitor.registry | string | `"registry1.dso.mil"` |  |
| monitor.oem | string | `""` |  |
| monitor.leastPrivilege | bool | `false` |  |
| monitor.exporter.enabled | bool | `false` |  |
| monitor.exporter.image.repository | string | `"ironbank/neuvector/neuvector/prometheus-exporter"` |  |
| monitor.exporter.image.tag | string | `"1-1.0.0"` |  |
| monitor.exporter.image.imagePullPolicy | string | `"Always"` |  |
| monitor.exporter.CTRL_USERNAME | string | `"admin"` |  |
| monitor.exporter.CTRL_PASSWORD | string | `"admin"` |  |
| monitor.exporter.ctrlSercretName | string | `""` |  |
| monitor.exporter.enforcerStats.enabled | bool | `false` |  |
| monitor.exporter.ctrlSecretName | string | `""` |  |
| monitor.exporter.apiSvc | string | `"neuvector-svc-controller-api:10443"` |  |
| monitor.exporter.podLabels | object | `{}` |  |
| monitor.exporter.securityContext | object | `{}` |  |
| monitor.exporter.containerSecurityContext.runAsUser | int | `1001` |  |
| monitor.exporter.containerSecurityContext.runAsGroup | int | `1001` |  |
| monitor.exporter.containerSecurityContext.capabilities.drop[0] | string | `"ALL"` |  |
| monitor.exporter.svc.enabled | bool | `true` |  |
| monitor.exporter.svc.type | string | `"ClusterIP"` |  |
| monitor.exporter.svc.loadBalancerIP | string | `""` |  |
| monitor.exporter.svc.annotations | object | `{}` |  |
| monitor.exporter.grafanaDashboard.enabled | bool | `false` |  |
| monitor.exporter.grafanaDashboard.namespace | string | `""` |  |
| monitor.exporter.grafanaDashboard.labels | object | `{}` |  |
| monitor.exporter.serviceMonitor.enabled | bool | `false` |  |
| monitor.exporter.serviceMonitor.labels | object | `{}` |  |
| monitor.exporter.serviceMonitor.annotations | object | `{}` |  |
| monitor.exporter.serviceMonitor.interval | string | `""` |  |
| monitor.exporter.serviceMonitor.metricRelabelings | list | `[]` |  |
| monitor.exporter.serviceMonitor.relabelings | list | `[]` |  |
| monitoring.enabled | bool | `false` |  |
| monitoring.namespace | string | `"monitoring"` |  |
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
| networkPolicies.ingressLabels.app | string | `"istio-ingressgateway"` |  |
| networkPolicies.ingressLabels.istio | string | `"ingressgateway"` |  |
| networkPolicies.controlPlaneCidr | string | `"0.0.0.0/0"` |  |
| networkPolicies.additionalPolicies | list | `[]` |  |
| bbtests.enabled | bool | `false` |  |
| bbtests.cypress.artifacts | bool | `true` |  |
| bbtests.cypress.envs.cypress_url | string | `"http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |
| bbtests.cypress.resources.requests.cpu | string | `"2"` |  |
| bbtests.cypress.resources.requests.memory | string | `"4Gi"` |  |
| bbtests.cypress.resources.limits.cpu | string | `"2"` |  |
| bbtests.cypress.resources.limits.memory | string | `"4Gi"` |  |
| bbtests.scripts.envs.URL | string | `"http://neuvector-service-webui.{{ .Release.Namespace }}.svc.cluster.local:8443"` |  |
| exporter.enabled | bool | `false` |  |

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md) if you are interested in contributing.

---

_This file is programatically generated using `helm-docs` and some BigBang-specific templates. The `gluon` repository has [instructions for regenerating package READMEs](https://repo1.dso.mil/big-bang/product/packages/gluon/-/blob/master/docs/bb-package-readme.md)._
