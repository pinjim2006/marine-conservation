import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://marine-conservation.vercel.app',
  base: '/',

  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
    routing: {
      // 建議設為 true，讓預設語言也有路徑前綴 (例如 /zh-tw/)
      // 這樣你在處理圖片路徑或連結時邏輯會比較一致
      prefixDefaultLocale: true,
      // 當使用者輸入不存在的語系路徑時，自動導向
      fallbackType: 'redirect'
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});