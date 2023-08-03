# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
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
