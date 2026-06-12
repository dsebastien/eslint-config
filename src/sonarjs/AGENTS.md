# AGENTS.md

## Scope

- This file applies to `src/sonarjs/`.

## What Lives Here

- SonarJS-related lint rule composition layered onto the base config.

## Working Rules

- Keep this entrypoint narrowly focused on SonarJS behavior.
- Validate that added rules do not duplicate or fight the base TypeScript/Angular config unnecessarily.
