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
	@pnpm prettier --check .

.PHONY: test
test:
	@pnpm check-types
	@pnpm vitest run
