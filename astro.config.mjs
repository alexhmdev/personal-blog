// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://alexhm.dev/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
