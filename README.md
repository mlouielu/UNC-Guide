UNC Guide
=========

A lightweight, Docsify-based guide to life at UNC–Chapel Hill.

Quick start
-----------

To run this guide locally:

```
# Clone the repo
git clone https://github.com/mlouielu/UNC-Guide
cd UNC-Guide

# Install docsify-cli
npm i docsify-cli -g

# Serve the docs
docsify serve docs
```

Then browse `http://localhost:3000` for the guide.

Structure
---------

- Content: `docs/` (English) and `docs/zh_TW/` (Traditional Chinese)
- Navigation: `docs/_sidebar.md` and `docs/_navbar.md`
- Entry: `docs/index.html` (Docsify config via `window.$docsify`)
- Assets: `docs/assets/` (reference with relative paths)
- GitHub Pages: keep `docs/.nojekyll` so assets render correctly

Deploy (GitHub Pages)
---------------------

1. Commit and push changes to your default branch (e.g., `main`).
2. In GitHub: Settings → Pages → Build and deployment:
   - Source: “Deploy from a branch”
   - Branch: your default branch (e.g., `main`)
   - Folder: `/docs`
3. Ensure `docs/.nojekyll` exists (prevents Jekyll processing).
4. Optional: Set a custom domain under Settings → Pages, and add a `CNAME` file to `docs/`.

Contributing
------------

See `AGENTS.md` for style, navigation updates, and PR guidelines.

License
-------

This project is licensed under the Clear BSD License. See the full text in [LICENSE](LICENSE).
