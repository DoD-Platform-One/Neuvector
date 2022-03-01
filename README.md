# Neuvector




## Install Without Flux

```bash

helm upgrade -i neuvector chart --create-namespace -n neuvector

```

assuming you're not running in a virtualized environment, all pods should come up healthy

```bash
$ kubectl get pods -n neuvector  
NAME                                        READY   STATUS             RESTARTS   AGE
neuvector-scanner-pod-5b94c54657-cdgjg      1/1     Running            0          37m
neuvector-scanner-pod-5b94c54657-ph72z      1/1     Running            0          37m
neuvector-scanner-pod-5b94c54657-42h47      1/1     Running            0          37m
neuvector-manager-pod-798c7bb866-8gnvw      1/1     Running            0          37m
neuvector-controller-pod-6dd997df98-r55kf   0/1     CrashLoopBackOff   11         37m
neuvector-controller-pod-6dd997df98-g9l8j   0/1     CrashLoopBackOff   11         37m
neuvector-enforcer-pod-dq27k                0/1     CrashLoopBackOff   11         37m
neuvector-controller-pod-6dd997df98-gtzml   0/1     CrashLoopBackOff   12         37m

```


and CRDs should be available

```bash
$ kubectl get crds | grep neuvector
nvwafsecurityrules.neuvector.com                2022-03-01T16:22:19Z
nvsecurityrules.neuvector.com                   2022-03-01T16:22:19Z
nvclustersecurityrules.neuvector.com            2022-03-01T16:22:19Z
nvadmissioncontrolsecurityrules.neuvector.com   2022-03-01T16:22:19Z

```

## Install With flux



Install Flux via https://repo1.dso.mil/platform-one/big-bang/bigbang/-/blob/master/scripts/install_flux.sh

```bash
$  git remote -v
origin  https://repo1.dso.mil/platform-one/big-bang/bigbang.git (fetch)
origin  https://repo1.dso.mil/platform-one/big-bang/bigbang.git (push)
$ ./scripts/install_flux.sh -u ${REGISTRY1_USERNAME} -p ${REGISTRY1_PASSWORD} 
REGISTRY_URL: registry1.dso.mil
REGISTRY_USERNAME: runyontr
namespace/flux-system created
Creating secret private-registry in namespace flux-system
secret/private-registry created
Installing flux from kustomization
Warning: resource namespaces/flux-system is missing the kubectl.kubernetes.io/last-applied-configuration annotation which is required by kubectl apply. kubectl apply should only be used on resources created declaratively by either kubectl create --save-config or kubectl apply. The missing annotation will be patched automatically.
namespace/flux-system configured
customresourcedefinition.apiextensions.k8s.io/alerts.notification.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/buckets.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/gitrepositories.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/helmcharts.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/helmreleases.helm.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/helmrepositories.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/kustomizations.kustomize.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/providers.notification.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/receivers.notification.toolkit.fluxcd.io created
serviceaccount/helm-controller created
serviceaccount/kustomize-controller created
serviceaccount/notification-controller created
serviceaccount/source-controller created
clusterrole.rbac.authorization.k8s.io/crd-controller created
clusterrolebinding.rbac.authorization.k8s.io/cluster-reconciler created
clusterrolebinding.rbac.authorization.k8s.io/crd-controller created
service/notification-controller created
service/source-controller created
service/webhook-receiver created
deployment.apps/helm-controller created
deployment.apps/kustomize-controller created
deployment.apps/notification-controller created
deployment.apps/source-controller created
networkpolicy.networking.k8s.io/allow-egress created
networkpolicy.networking.k8s.io/allow-scraping created
networkpolicy.networking.k8s.io/allow-webhooks created
deployment.apps/helm-controller condition met
deployment.apps/source-controller condition met
deployment.apps/kustomize-controller condition met
deployment.apps/notification-controller condition met
```

```bash
kubectl apply -f install.yaml
```

And you would see healthy pods if running on an actual cluster:

```bash
$ kubectl get gitrepositories,hr,pods -n neuvector
NAME                                               URL                                                                      READY   STATUS                                                            AGE
gitrepository.source.toolkit.fluxcd.io/neuvector   https://repo1.dso.mil/platform-one/big-bang/apps/sandbox/neuvector.git   True    Fetched revision: main/b7969f621362892838a743e51929ff21d3f74fef   5m27s

NAME                                           READY     STATUS                       AGE
helmrelease.helm.toolkit.fluxcd.io/neuvector   Unknown   Reconciliation in progress   5m27s

NAME                                            READY   STATUS             RESTARTS   AGE
pod/neuvector-scanner-pod-5b94c54657-fm6lc      1/1     Running            0          3m15s
pod/neuvector-manager-pod-798c7bb866-qtjz7      1/1     Running            0          3m15s
pod/neuvector-scanner-pod-5b94c54657-xfdmc      1/1     Running            0          3m15s
pod/neuvector-scanner-pod-5b94c54657-cx8f4      1/1     Running            0          3m15s
pod/neuvector-controller-pod-6dd997df98-g7kk8   0/1     CrashLoopBackOff   4          3m15s
pod/neuvector-controller-pod-6dd997df98-gsc5r   0/1     CrashLoopBackOff   4          3m15s
pod/neuvector-controller-pod-6dd997df98-jbkng   0/1     CrashLoopBackOff   5          3m15s
pod/neuvector-enforcer-pod-4k74k                0/1     Error              5          3m15s


```
