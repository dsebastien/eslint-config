# AGENTS.md

## Scope

- This file applies to the whole `eslint-config` repository.
- If a subfolder contains its own `AGENTS.md`, follow the closer file for that subtree.

## Repository Purpose

- `eslint-config` publishes reusable ESLint flat-config entrypoints consumed by Stark and other Angular repos.
- The authoritative source lives under `src/`; `dist/` is generated output.

## Working Rules

- Do not edit `dist/`, `.tmp-eslint/`, `tmp-eslint/`, or `node_modules/` by hand.
- Keep `package.json` `exports` aligned with the entrypoints that actually exist under `src/`.
- Favor composable config changes that keep consumer impact easy to reason about.
- Existing history uses conventional commits such as `feat(all): ...`, `fix(config): ...`, and `chore(release): ...`.

## Validation

- `npm run build`
- If you change rule behavior or parser/plugin wiring, validate the nearest consumer repo as well.

## Folder Map

- Read [src/AGENTS.md](src/AGENTS.md) before changing published config entrypoints.
- Read [scripts/AGENTS.md](scripts/AGENTS.md) before changing CI helpers.
