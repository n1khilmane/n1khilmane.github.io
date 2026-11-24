#!/usr/bin/env node
// Usage: npm run new -- "Post title" [--life] [--publish]
import { existsSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const title = args.filter((a) => !a.startsWith("--")).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new -- "Post title" [--life] [--publish]');
  process.exit(1);
}
const mode = args.includes("--life") ? "life" : "work";
const draft = !args.includes("--publish");
const slug = title.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/[\s_]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
if (!slug) {
  console.error("Title produced an empty slug; use ASCII letters or numbers.");
  process.exit(1);
}
const date = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD, local time
const path = `src/content/posts/${slug}.md`;

if (existsSync(path)) {
  console.error(`Exists: ${path}`);
  process.exit(1);
}
writeFileSync(path, `---
title: ${JSON.stringify(title)}
date: ${date}
mode: ${mode}
# description: One line for previews and SEO
draft: ${draft}
---

`);
console.log(`Created ${path} (${mode}${draft ? ", draft" : ""})`);
