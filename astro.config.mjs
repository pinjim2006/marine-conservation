import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pinjim2006.github.io',
  base: '/marine-conservation/',
  vite: {
    plugins: [tailwindcss()],
  },
});