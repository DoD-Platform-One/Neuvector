Added at the bottom of the values file are changes to support Istio, monitoring, and optional network policies.

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