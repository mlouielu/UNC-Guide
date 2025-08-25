UNC Guide
=========

A lightweight, Docusaurus-based guide to life at UNC–Chapel Hill.

Quick start
-----------

To run this guide locally:

```
# Clone the repo
git clone https://github.com/mlouielu/UNC-Guide
cd UNC-Guide

# Run with Docusaurus
cd website
npx docusaurus start
```

Then browse `http://localhost:3000` for the guide.

Structure
---------

- Content: `website/docs/` (Traditional Chinese) and `website/i18n` (Other languages)
- Navigation: `website/sidebars.js`
- Entry: `website/docs/intro.md`
- Assets: `website/static` (reference with relative paths)

Deploy (GitHub Pages)
---------------------

1. Commit and push changes to your default branch (e.g., `main`).
2. In GitHub: Settings → Pages → Build and deployment:
   - Source: “Deploy from Action”

Contributing
------------

See `AGENTS.md` for style, navigation updates, and PR guidelines.

License
-------

This project is licensed under the Clear BSD License. See the full text in [LICENSE](LICENSE).
