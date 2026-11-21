import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export async function getPosts(): Promise<Post[]> {
  const all = await getCollection("posts", (p) => import.meta.env.DEV || !p.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readTime(body = ""): number {
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 230));
}

export function fmtDate(d: Date, style: "short" | "long" = "short"): string {
  return d.toLocaleDateString("en-US", style === "short"
    ? { month: "short", year: "numeric", timeZone: "UTC" }
    : { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
