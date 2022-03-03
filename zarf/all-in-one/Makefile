# Figure out which Zarf binary we should use based on the operating system we are on
ZARF_BIN := zarf
UNAME_S := $(shell uname -s)
UNAME_P := $(shell uname -p)
ifneq ($(UNAME_S),Linux)
	ifeq ($(UNAME_S),Darwin)
		ZARF_BIN := $(addsuffix -mac,$(ZARF_BIN))
	endif
	ifeq ($(UNAME_P),i386)
		ZARF_BIN := $(addsuffix -intel,$(ZARF_BIN))
	endif
	ifeq ($(UNAME_P),arm64)
		ZARF_BIN := $(addsuffix -apple,$(ZARF_BIN))
	endif
endif

.DEFAULT_GOAL := help

help: ## Show a list of all targets
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	| sed -n 's/^\(.*\): \(.*\)##\(.*\)/\1:\3/p' \
	| column -t -s ":"

bin:
	@mkdir -p bin

bin/zarf: | bin
	@echo "Downloading zarf"
	@wget https://zarf-public.s3-us-gov-west-1.amazonaws.com/release/v0.15.0/zarf -O bin/zarf
	@chmod +x bin/zarf
	@touch bin/zarf

bin/zarf-mac-apple: | bin
	@echo "Downloading zarf-mac-apple"
	@wget https://zarf-public.s3-us-gov-west-1.amazonaws.com/release/v0.15.0/zarf-mac-apple -O bin/zarf-mac-apple
	@chmod +x bin/zarf-mac-apple
	@touch bin/zarf-mac-apple

bin/zarf-mac-intel: | bin
	@echo "Downloading zarf-mac-intel"
	@wget https://zarf-public.s3-us-gov-west-1.amazonaws.com/release/v0.15.0/zarf-mac-intel -O bin/zarf-mac-intel
	@chmod +x bin/zarf-mac-intel
	@touch bin/zarf-mac-intel

bin/zarf-init.tar.zst: | bin
	@echo "Downloading zarf-init.tar.zst"
	@wget https://zarf-public.s3-us-gov-west-1.amazonaws.com/release/v0.15.0/zarf-init.tar.zst -O bin/zarf-init.tar.zst
	@touch bin/zarf-init.tar.zst

bin/zarf-package-neuvector-all-in-one.tar.zst: | bin/zarf bin/zarf-mac-apple bin/zarf-mac-intel bin/zarf-init.tar.zst
	@bin/$(ZARF_BIN) package create --confirm
	@mv zarf-package-neuvector-all-in-one.tar.zst bin/zarf-package-neuvector-all-in-one.tar.zst
	@touch bin/zarf-package-neuvector-all-in-one.tar.zst

.PHONY: package
package: ## Create the package
	@rm -f bin/zarf-package-neuvector-all-in-one.tar.zst
	@$(MAKE) bin/zarf-package-neuvector-all-in-one.tar.zst

.PHONY: vm-init
vm-init: vm-destroy | bin/zarf bin/zarf-init.tar.zst ## Initialize the Vagrant box
	@VAGRANT_EXPERIMENTAL="disks" vagrant up --no-color
	@vagrant ssh

.PHONY: vm-ssh
vm-ssh: ## SSH into the running VM
	@vagrant ssh

.PHONY: vm-destroy
vm-destroy: ## Cleanup plz
	@vagrant destroy -f
