import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://marine-conservation.vercel.app',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});