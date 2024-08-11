import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const isGitHubPages = process.env.SITE_ENV === "github";
const site = isGitHubPages
  ? "https://test.github.io"
  : "https://www.alexconlag.com";
const base = isGitHubPages ? "/alex16jpv/" : "/";

export default defineConfig({
  site,
  base,
  integrations: [tailwind(), sitemap()],
});
