# Prometheus Metrics Exporter

## Reference Documentation

* [Upstream Exporter Repository](https://github.com/neuvector/prometheus-exporter)
* [Upstream Exporter Helm Chart](https://github.com/neuvector/neuvector-helm/tree/master/charts/monitor)

## Overview 

The Neuvector Metrics Exporter needs authentication configured to be able to provide metrics:
* By default (similar to fluent-bit) the built-in `admin` superuser account is fed in to be able to authenticate. 
* It is strongly encouraged to use a read-only user for the metrics exporter.

## Creating a read-only metrics user

Neuvector comes configured with a default `admin` user, but it is highly encouraged to create a new user with limited permission. A new user can be created manually in the UI via https://neuvector.bigbang.dev/#/settings/users or be created as part of the built in user initialization, which uses `/etc/config/userinitcfg.yaml`.  

The following example shows creation of a new `metrics` user with the built in `reader` role and the corresponding configuration to ensure the `CTRL_USERNAME` and `CTRL_PASSWORD` are configured to utilize the new user. 

```yaml
  values:
    controller:
      secret:
        enabled: true
        data: 
          # This configuration is read in at deploy time and users are created.
          userinitcfg.yaml:
            users:
            - username: metrics
              password: bb-M3trics
              role: reader
              fullname: metrics
        
    monitor:
      install: true
      exporter:
        enabled: true
        serviceMonitor:
          enabled: true
        svc:
          enabled: true
        CTRL_USERNAME: metrics
        CTRL_PASSWORD: bb-M3trics
```