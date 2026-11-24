import sharp from "sharp";

// 180x180 icon matching favicon.svg (light variant), rendered at build time.
export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <rect width="180" height="180" fill="#151514"/>
    <text x="90" y="118" text-anchor="middle" font-family="Menlo, DejaVu Sans Mono, monospace" font-size="84" font-weight="600" fill="#fafaf8">nm</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
