# NeuVector

## Overview

This package contains an installation of NeuVector using the upstream [NeuVector core helm chart](https://github.com/neuvector/neuvector-helm/tree/master/charts/core) with Big Bang modifications and additions.

## NeuVector

[NeuVector](https://neuvector.com/) is an open-source, full lifecycle container security platform. This includes vulnerability scanning (both in pipelines and in live production clusters), network visibility, compliance tracking and much more.

This repo provides an implementation of NeuVector designed for consumption as part of Big Bang. There are a number of additions to the upstream chart to support things like Istio mTLS, monitoring, network policies, and more.

## How it works

NeuVector runs 4 core deployments in addition to an "updater" cronjob. The manager is a simple pod that provides a Web UI for accessing and managing the platform. Controller pod(s) are used to manage enforcer container(s) and provide REST APIs for the management console. The enforcer is used to enforce security policies, deployed as a daemonset across all nodes. Finally the scanner provides vulnerability and compliance scanning and is updated regularly with new CVE data. Additional information can be reviewed on the upstream [overview document](https://open-docs.neuvector.com/basics/overview).
