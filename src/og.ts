import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";

// Build runs from project root; bundling breaks import.meta.url-relative paths.
const font = (p: string) => readFileSync(join(process.cwd(), "node_modules/geist/dist/fonts", p));
const fonts = [
  { name: "Geist", data: font("geist-sans/Geist-Regular.ttf"), weight: 400 as const, style: "normal" as const },
  { name: "Geist", data: font("geist-sans/Geist-SemiBold.ttf"), weight: 600 as const, style: "normal" as const },
  { name: "Geist Mono", data: font("geist-mono/GeistMono-Regular.ttf"), weight: 400 as const, style: "normal" as const },
];

type El = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): El => ({ type, props: { style, children } });

export async function ogPng(opts: { title: string; kicker: string; meta: string; accent: string }): Promise<Response> {
  const { title, kicker, meta, accent } = opts;
  const tree = h("div", { width: "100%", height: "100%", display: "flex", background: "#fafaf8", color: "#151514", fontFamily: "Geist" }, [
    h("div", { width: 14, height: "100%", background: accent }),
    h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, padding: "72px 80px" }, [
      h("div", { display: "flex", fontFamily: "Geist Mono", fontSize: 26, color: "#8a8a84" }, kicker),
      h("div", { display: "flex", fontSize: title.length > 48 ? 64 : 80, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.08, maxWidth: 980 }, title),
      h("div", { display: "flex", justifyContent: "space-between", fontFamily: "Geist Mono", fontSize: 26, color: "#8a8a84" }, [
        h("div", { display: "flex" }, meta),
        h("div", { display: "flex", color: accent }, "nikhilmane.com"),
      ]),
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}

export const ACCENT = { work: "#2f5f9e", life: "#a6532c" } as const;
