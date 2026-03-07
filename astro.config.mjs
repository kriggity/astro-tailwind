// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import aiRobotsTxt from "astro-ai-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://kriggity.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap(), aiRobotsTxt()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});