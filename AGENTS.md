# Repository Guidelines

## Project Structure & Module Organization
- Source content: `docs/` (English) and `docs/zh_TW/` (Traditional Chinese).
- Navigation: `docs/_sidebar.md` and `docs/_navbar.md` define menus.
- Entry point: `docs/index.html` (Docsify-style single-page site).
- Assets: place images and files in `docs/assets/` and reference with relative paths.

## Build, Test, and Development Commands
- Local preview (no build step):
  - `cd docs && python3 -m http.server 3000` — serve static files at `http://localhost:3000`.
  - If Docsify CLI is available: `npx docsify serve docs` — live-reloads Markdown.
- Publish: site can be deployed by serving the `docs/` folder (e.g., GitHub Pages). `.nojekyll` must remain.

## Coding Style & Naming Conventions
- Format: all content is Markdown. Use ATX headings (`#`, `##`), fenced code blocks, and wrap at ~100 chars.
- Lists: use `*` for unordered lists (not unicode bullets like `•`).
- Links: always `[text](relative/path.md)`; avoid raw `(...md)`. English pages must not use `zh_TW/` in links.
- Filenames: lowercase-with-hyphens, `.md` for pages (e.g., `getting-started.md`).
- Indentation: 2 spaces in Markdown lists and HTML snippets; no tabs.
- Navigation: add new pages to `docs/_sidebar.md` (and localized sidebars if present).

## Testing Guidelines
- Manual checks: open locally, verify navigation, anchors, and images.
- Link checking (optional): use a Markdown link checker (e.g., `npx markdown-link-check file.md`).
- Consistency: ensure English and `zh_TW` counterparts stay in sync when applicable.

## Commit & Pull Request Guidelines
- Commits: imperative, concise messages (e.g., `docs: add banking guide`, `nav: rearrange sidebar`).
- Scope prefixes: `docs:`, `nav:`, `content:`, `chore:` help categorize changes.
- PRs: include a short description, screenshots/GIFs for nav or visual changes, and reference any related issues. Update sidebars and links.

## Security & Configuration Tips
- Keep external scripts minimal and trusted; prefer local assets in `docs/assets/`.
- Do not remove `.nojekyll`; it enables GitHub Pages to serve the site as-is.
- Avoid hardcoding secrets or private links. Use relative paths and publicly accessible resources.
