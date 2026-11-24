---
title: Example post
date: 2026-11-21
mode: work
description: Template showing post format. Delete or replace.
draft: true
---

Drafts (`draft: true`) show in `npm run dev` only, never in production.

## Frontmatter

- `title`, `date` (YYYY-MM-DD), `mode` (`work` or `life`) required.
- `description` optional; used for SEO and link previews.

## Headings

Three or more `##` headings auto-generate a contents list.[^1]

## Footnotes

Footnotes become sidenotes in the margin on wide screens.[^2]

[^1]: Only `##` level headings are listed.
[^2]: On narrow screens they stay at the bottom as normal footnotes.

## Code

```ts
const hello = "world";
```
