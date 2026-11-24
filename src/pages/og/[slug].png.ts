import type { APIContext } from "astro";
import { ogPng, ACCENT } from "../../og";
import { getPosts, fmtDate, readTime, type Post } from "../../lib";

export async function getStaticPaths() {
  return (await getPosts()).map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function GET({ props }: APIContext) {
  const { post } = props as { post: Post };
  return ogPng({
    title: post.data.title,
    kicker: post.data.mode,
    meta: `${fmtDate(post.data.date, "long")} · ${readTime(post.body)} min`,
    accent: ACCENT[post.data.mode],
  });
}
