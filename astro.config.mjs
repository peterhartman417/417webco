import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://417webco.com",
  integrations: [sitemap()],
  trailingSlash: "ignore",
});
