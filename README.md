# nikhilmane.com

Personal site. Astro 7, fully static, served by GitHub Pages from the `gh-pages` branch.

```sh
nvm use          # Node 22
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # -> dist/
```

## What's here

- **Work / life toggle.** Swaps bio, writing and projects. Life mode uses Newsreader serif, a warm accent, first name only, a tinted photo and paper grain. Press `w` / `l`, or link with `?mode=life`.
- **Command menu.** `⌘K`, `Ctrl+K` or `/`: posts, links, mode, theme (system/light/dark), copy email.
- **Posts.** Markdown with sidenotes from footnotes on wide screens, a reading progress bar, heading anchors and older/newer links.
- **Generated at build time.** OG images (`/og/*.png`), apple touch icon, RSS (`/rss.xml`), sitemap.
- **Togi card art.** Canvas "commitment graph" (`src/components/GraphArt.astro`).
- **/archive.** 2017–2023 experience, education, research and old posts (noindex).
- The 2021 React portfolio is preserved at tag `v1-react`.

## Editing

| What | Where |
|---|---|
| Bio, links, city/timezone, projects | `src/data/site.ts` |
| Archive content | `src/data/archive.ts` |
| Photo | `src/assets/nikhil.jpg` |
| Colors, type | `src/styles/global.css` (tokens at top) |

## Posting

```sh
npm run new -- "Post title"            # work draft
npm run new -- "Post title" --life     # life draft
npm run new -- "Post title" --publish  # not a draft
```

This creates `src/content/posts/<slug>.md`:

```md
---
title: "Post title"
date: 2026-11-23
mode: work        # work | life
description: One line for previews and SEO.
draft: true       # true = dev server only
---
```

Footnotes (`[^1]`) become margin notes on wide screens. Three or more `##` headings add a contents list. The URL is `/posts/<slug>/`.

## Deploy

CI (`ci.yml`) runs check and build on every PR. Deploy is **manual**:

```sh
gh workflow run deploy.yml      # builds master, publishes dist/ to gh-pages
```

To deploy on every merge instead, add a `push: branches: [master]` trigger to `.github/workflows/deploy.yml`.

## Launch checklist

- [ ] Bio for work and life (`src/data/site.ts`)
- [ ] Togi: public name OK? URL (`href`) and blurb
- [ ] Contact email
- [ ] City in the clock (currently New York)
- [ ] NYU dates in `src/data/archive.ts` (assumed 2021–2023)
- [ ] Delete `src/content/posts/hello-world.md` and write a first real post
- [ ] Run Deploy
