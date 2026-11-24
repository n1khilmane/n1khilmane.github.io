import satori from "satori";
import sharp from "sharp";
import { fonts } from "../og";

// 180x180 icon matching favicon.svg, rendered with bundled Geist Mono (no system-font dependence).
export async function GET() {
  const svg = await satori(
    { type: "div", props: { style: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#151514", color: "#fafaf8", fontFamily: "Geist Mono", fontSize: 80, letterSpacing: "-0.04em" }, children: "nm" } } as never,
    { width: 180, height: 180, fonts },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
