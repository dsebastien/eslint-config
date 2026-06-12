# AGENTS.md

## Scope

- This file applies to `src/typescript/`.

## What Lives Here

- TypeScript and Angular source lint configuration for downstream consumers.

## Working Rules

- Be careful with parser, resolver, and plugin-version changes because they can create repo-wide false positives.
- Keep rule changes compatible with the targeted Angular/TypeScript toolchain in the consuming repos.
