# NeuVector Helm Chart

Helm chart for NeuVector's monitoring services.

## Configuration

The following table lists the configurable parameters of the NeuVector chart and their default values.

Parameter | Description | Default | Notes
--------- | ----------- | ------- | -----
`serviceAccount` | Service account name for NeuVector components | `default` |
`registry` | NeuVector container registry | `docker.io/neuvector` |
`oem` | OEM release name | `nil` |
`leastPrivilege` | Assume monitor chart is always installed after the core chart, so service accounts created by the core chart will be used. Keep this value as same as in the core chart. | `false` |
`exporter.enabled` | If true, create Prometheus exporter | `false` |
`exporter.image.repository` | exporter image name | `neuvector/prometheus-exporter` |
`exporter.image.tag` | exporter image tag | `latest` |
`exporter.CTRL_USERNAME` | Username to login to the controller. Suggest to replace the default admin user to a read-only user | `admin` |
`exporter.CTRL_PASSWORD` | Password to login to the controller. | `admin` |

---
Contact <support@neuvector.com> for access to Docker Hub and docs.
