import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://qrforagent.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/admin") && !page.includes("/checkout"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
