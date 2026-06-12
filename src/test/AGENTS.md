# AGENTS.md

## Scope

- This file applies to `src/test/`.

## What Lives Here

- Test-oriented ESLint configuration for spec and test files.

## Working Rules

- Keep test-specific relaxations and globals here rather than leaking them into the main app/library configs.
- If you change assertions, globals, or test-file patterns, validate with a real consuming spec suite.
