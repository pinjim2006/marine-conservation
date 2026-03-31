import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pinjim2006.github.io',
  base: '/marine-conservation/',
  integrations: [tailwind()],
});