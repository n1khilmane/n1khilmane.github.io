import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nikhilmane.com",
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
  markdown: { shikiConfig: { themes: { light: "github-light", dark: "github-dark" }, defaultColor: false } },
});
