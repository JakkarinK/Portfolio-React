# Portfolio

A responsive portfolio and resume for Jakkarin Kerdthaidee, built with React,
TypeScript, Vite, and i18next. The interface supports English and Thai; use the
language selector in the navigation to switch languages. The selection is saved
in the browser. Locale resources live in `src/assets/locale`.

Separate pages present the professional profile, strengths, skills, experience,
projects, education, and contact information.

## Naming conventions

Use kebab-case for multiword folder names and camelCase for source and asset
filenames. Keep tool-required filenames and locale-code filenames such as
`package.json`, `index.html`, `en.json`, and `th.json` unchanged.

## Development

```sh
yarn
yarn dev
```

Run the production type check and build with `yarn build`, or check code style
with `yarn lint`.
