# Neuvector All-In-One Zarf Package

## Prerequisites

* Supported OS (MacOS x86_64, Linux x86_64)
* `wget`
* `make`
* `vagrant` (with VirtualBox). Alternatively you can run in an EC2 instance or something.

## Usage

```bash
# Move to the directory
cd zarf/all-in-one

# Create the package
make package

# Turn on the VM
make vm-init

# Init
./zarf init --confirm --components k3s

# Deploy
./zarf package deploy --confirm zarf-package-neuvector-all-in-one.tar.zst

# Turn off the VM
make vm-destroy
```
