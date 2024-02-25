.PHONY: setup
setup:
	@sh -c "echo '#!/bin/sh\n\nmake lint test' > .git/hooks/pre-commit"
	@chmod 755 .git/hooks/pre-commit
	@pnpm install

.PHONY: fmt
fmt:
	@pnpm prettier --write .
	@pnpm prettier-package-json --write

.PHONY: lint
lint:
ifneq (, $(shell command -v pnpm))
	@pnpm prettier --check .
	@pnpm eslint src test/node
endif
ifneq (, $(shell command -v deno))
	@deno check src/mod.ts
	@deno lint src/mod.ts
endif

.PHONY: test
test:
ifneq (, $(shell command -v pnpm))
	@pnpm check-types
	@pnpm vitest run
endif
ifneq (, $(shell command -v deno))
	@deno test --allow-env --allow-net --ignore=test/node
endif
