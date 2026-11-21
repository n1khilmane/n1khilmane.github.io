# nikhilmane.com

Personal site. Astro, static, deployed to GitHub Pages (`gh-pages` branch) on push to `master`.

```sh
nvm use        # Node 22
npm install
npm run dev    # http://localhost:4321
```

## Editing

- Bio, links, projects: `src/data/site.ts`
- Archive page content: `src/data/archive.ts`
- Photo: `src/assets/nikhil.jpg`

## Posting

Add `src/content/posts/<slug>.md`:

```md
---
title: Post title
date: 2026-11-21
mode: work        # work | life (which toggle side it shows on)
description: Optional one-liner for previews.
draft: false      # true = dev only
---

Body in Markdown.
```

Push to `master` and it deploys. URL is `/posts/<slug>/`.

The 2021 React portfolio lives at tag `v1-react`.
