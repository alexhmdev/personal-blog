// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://alexhm.dev/",
  integrations: [tailwind(), mdx(), image(), react()],
});
