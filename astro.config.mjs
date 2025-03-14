// @ts-check
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [],

  vite: {
    plugins: [tailwindcss()]

  },
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
    imageCDN: false,
  }),
});
