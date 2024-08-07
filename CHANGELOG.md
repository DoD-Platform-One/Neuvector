# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.7.8-bb.0] - 2024-06-24

### Changed

- Updated chart version to `2.7.8`
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/controller from `5.3.3` to `5.3.4`
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/enforcer from `5.3.3` to `5.3.4`
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/manager from `5.3.3` to `5.3.4`

## [2.7.7-bb.3] - 2024-07-24

### Changed

- Added `version` pod label to deployments and daemonset to conform to Kiali requirements
- Updated `docs/DEVELOPMENT_MAINTENANCE.md` [Modifications made to upstream chart](https://repo1.dso.mil/big-bang/product/packages/neuvector/-/blob/main/docs/DEVELOPMENT_MAINTENANCE.md?ref_type=heads#modifications-made-to-upstream-chart) section to reflect changes

## [2.7.7-bb.2] - 2024-07-13

### Changed

- Removed redundant entries in package test-values.yaml already in package values.yaml
- Updated cypress resources to standard 2 cpu and 4 Gi memory

## [2.7.7-bb.1] - 2024-07-02

### Changed

- Rename and remove istio authorization policies

## [2.7.7-bb.0] - 2024-06-24

### Changed

- Updated chart version to `2.7.7`
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/controller from 5.3.2 to 5.3.3
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/enforcer from 5.3.2 to 5.3.3
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/manager from 5.3.2 to 5.3.3

## [2.7.6-bb.3] - 2024-06-18

### Changed

- Removed duplicate network attachment definition for OpenShift deployments
- Resolved naming conflict for cluster roles deployed to OpenShift

## [2.7.6-bb.2] - 2024-05-22

### Changed

- Fix monitoring sub chart dependency. Update to 2.6.3.
- Update from gluon 0.4.8 to 0.5.0

## [2.7.6-bb.1] - 2024-05-05

### Changed

- Updated registry1.dso.mil/ironbank/neuvector/neuvector/prometheus-exporter from 5.3.0 to 5.3.2

## [2.7.6-bb.0] - 2024-04-14

### Changed

- Updated registry1.dso.mil/ironbank/neuvector/neuvector/controller from 5.3.0 to 5.3.2
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/enforcer from 5.3.0 to 5.3.2
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/manager from 5.3.0 to 5.3.2

## [2.6.3-bb.19] - 2024-04-11

### Added

- Added Openshift resources to support Neuvector deployment in openshift

## [2.6.3-bb.18] - 2024-04-09

### Added

- Added custom network policies

## [2.6.3-bb.17] - 2024-03-22

### Changed

- Adding the monitoring authorization policy

## [2.6.3-bb.16] - 2024-03-21

### Changed

- Changed uid:gid to 1001:1001 for monitor.prometheus-exporter image to allow python package visibility

## [2.6.3-bb.15] - 2024-03-19

### Changed

- Updated registry1.dso.mil/ironbank/neuvector/neuvector/controller from 5.2.2 to 5.3.0
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/enforcer from 5.2.2 to 5.3.0
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/manager from 5.2.2 to 5.3.0
- Updated Cypress tests

## [2.6.3-bb.14] - 2024-03-15

### Changed

- Update for reverting exporter

## [2.6.3-bb.13] - 2024-03-13

### Changed

- Adding Sidecar to deny egress that is external to istio services
- Adding customServiceEntries to allow egress to override sidecar restraint

## [2.6.3-bb.12] - 2024-03-12

### Changed

- Openshift update for deploying Neuvector into Openshift cluster

## [2.6.3-bb.11] - 2024-03-11

### Changed

- Moved and fixed all of the authorization policies
- Updated some documentation

## [2.6.3-bb.10] - 2024-03-11

### Changed

- Updated NeuVector Development Maintenance doc to reflect it is part of Bigbang

## [2.6.3-bb.9] - 2024-02-06

### Changed

- Updated to Gluon 0.4.8
- Removed cypress config as it is now coming from Gluon
- Renamed cypress script file name

## [2.6.3-bb.8] - 2023-12-13

### Added

- Peerauthentication added for controller for upgrade support

## [2.6.3-bb.7] - 2023-12-06

### Changed

- Increase cypress timeouts

## [2.6.3-bb.6] - 2023-11-29

### Changed

- Updated big-bang/base from 2.0.0 to 2.1.0

### Removed

- requirements.lock file legacy to Helm 2

## [2.6.3-bb.5] - 2023-11-28

### Added

- Updating OSCAL Component file.

## [2.6.3-bb.4] - 2023-11-17

### Added

- Added istio `allow-nothing` policy
- Added istio `allow-ingress` polic(y|ies)
- Added istio custom policy template
- Changed `istio: injection:` from `"disabled"` to `"enabled"`

## [2.6.3-bb.3] - 2023-11-08

### Added

- Added logic for neuvector-prometheus-exporter-pod to poll for active api server before starting
- Set uid:gid runAsUser/runAsGroup to match the user/group in the exporter container

## [2.6.3-bb.2] - 2023-11-3

### Changed

- Updated Gluon from 0.4.1 to 0.4.4

## [2.6.3-bb.1] - 2023-10-16

### Added

- Added non-root group user

## [2.6.3-bb.0] - 2023-10-11

### Changed

- Updated registry1.dso.mil/ironbank/neuvector/neuvector/controller from 5.1.3 to 5.2.2
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/enforcer from 5.1.3 to 5.2.2
- Updated registry1.dso.mil/ironbank/neuvector/neuvector/manager from 5.1.3 to 5.2.2

## [2.4.5-bb.7] - 2023-10-11

### Changed

- Update OSCAL version from 1.0.0 to 1.1.1

## [2.4.5-bb.6] - 2023-09-21

### Changed

- Updated to Gluon 0.4.1 and Cypress 13.x

## [2.4.5-bb.5]

### Added

- Add ability to pass in a sso certificate authority secret with `sso.certificateAuthority.secret`.

## [2.4.5-bb.4] - 2023-08-15

### Added

- Update securityContext for controller, manager, scanner,& enforcer to runAsNonRoot

## [2.4.5-bb.3] - 2023-08-04

### Added

- added securityContext: capabilities: drop: ALL

## [2.4.5-bb.2] - 2023-07-31

### Fixed

- OSCAL component file package reference

## [2.4.5-bb.1] - 2023-07-27

### Added

- OSCAL component file
  
## [2.4.5-bb.0] - 2023-06-21

### Fixed

- Update images from `5.1.2` to `5.1.3`
- Update chart version to `2.4.5`
- Update monitor chart to `2.4.5`

## [2.4.3-bb.7] - 2023-04-06

### Fixed

- Update images from `5.1.1` to `5.1.2`
- Update chart version to `2.4.3`
- Update monitor chart to `2.4.3`

## [2.4.2-bb.6] - 2023-04-05

### Fixed

- Make cypress scan test more deterministic

## [2.4.2-bb.5] - 2023-03-22

### Changed

- Added support for podAnnotations on exporter
- Added network policy for updater kube api egress
- Add controller checksum for init config

## [2.4.2-bb.4] - 2023-03-14

### Changed

- Fixed pod termination issue caused by istio sidecar injection

## [2.4.2-bb.3] - 2023-03-10

### Changed

- Enable mTLS for metrics

## [2.4.2-bb.2] - 2023-03-08

### Changed

- Conditionals on API NetworkPolicy template

## [2.4.2-bb.1] - 2023-03-03

### Added

- Integrated istio

## [2.4.2-bb.0] - 2022-02-23

### Changed

- Update images from `5.1.0` to `5.1.1`
- Update chart version to `2.4.2`
- Update monitor chart to `2.4.2`
- Exporter image to test image list

## [2.4.0-bb.6] - 2022-02-28

### Added

- Add network policy for controller egress

## [2.4.0-bb.5] - 2022-02-09

### Changed

- Fixed network policy templating errors, standardized naming

## [2.4.0-bb.4] - 2023-02-09

### Fixed

- Update the monitor chart tarball

## [2.4.0-bb.3] - 2023-01-31

### Added

- Added Prometheus integration
- Added Grafana dashboard

## [2.4.0-bb.2] - 2023-01-17

### Changed

- Update gluon to new registry1 location + latest version (0.3.2)

## [2.4.0-bb.1]

### Changed

- Changed scanner image tag from `latest` to `5`

## [2.4.0-bb.0]

### Changed

- Update images to IronBank images (5.1.0)
- Update chart version to `2.4.0`

## [2.2.2-bb.2]

### Fixed

- Hot fix for some UI testing hiccups

## [2.2.2-bb.1]

### Changed

- Added tests directory and a test-ui file

## [2.2.2-bb.0]

### Changed

- Update images to IronBank images (5.0.2)
- Update chart version to `2.2.2`
- Use BB base image for updater job

## [1.9.1-bb.0]

### Added

- Pointing to upstream helm chart 1.9.1
