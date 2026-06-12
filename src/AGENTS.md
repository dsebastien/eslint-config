# AGENTS.md

## Scope

- This file applies to `src/`.

## What Lives Here

- Published ESLint flat-config entrypoints.
- Each subfolder exports a focused config family such as Angular templates, TypeScript, SonarJS, or test-specific rules.

## Working Rules

- Keep each entrypoint small and explicit.
- When you add or remove an entrypoint, update both `package.json` `exports` and the README/install guidance.
- Changes here affect downstream repos immediately, so prefer predictable rule deltas and clear compatibility upgrades.

## Read Before Editing

- [template/AGENTS.md](template/AGENTS.md)
- [typescript/AGENTS.md](typescript/AGENTS.md)
- [sonarjs/AGENTS.md](sonarjs/AGENTS.md)
- [test/AGENTS.md](test/AGENTS.md)
