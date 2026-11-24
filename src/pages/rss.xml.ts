import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib";
import { site } from "../data/site";

export async function GET(context: APIContext) {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  return rss({
    title: site.name,
    description: `Writing by ${site.name}`,
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/posts/${p.id}/`,
      categories: [p.data.mode],
    })),
  });
}
