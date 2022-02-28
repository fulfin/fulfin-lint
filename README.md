# Fulfin lint
Is a set of configurations for typescript, eslint and prettier which should be used in all our projects.

## Setup
```
npm install @fulfin/lint -D
```

In `.eslintrc.*` extend configuration with `@fulfin/lint`:
```
extends: ["@fulfin/lint"]
```
In `package.json` just add line for `prettier`;
```
"prettier": "@fulfin/lint/prettier"
```
