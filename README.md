# nikhilmane.com

Personal site. Astro, static, deployed to GitHub Pages (`gh-pages` branch) by the manual **Deploy** workflow (Actions tab, or `gh workflow run deploy.yml`).

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

```sh
npm run new -- "Post title"            # work draft
npm run new -- "Post title" --life     # life draft
npm run new -- "Post title" --publish  # not a draft
```

Or add `src/content/posts/<slug>.md` by hand:

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

Merge to `master`, then run Deploy. URL is `/posts/<slug>/`.

The 2021 React portfolio lives at tag `v1-react`.
