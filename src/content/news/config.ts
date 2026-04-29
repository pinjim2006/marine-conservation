import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    // 使用 image() 來確保 Astro 會優化 Page Bundle 內的圖片
    cover: image(),
  }),
});

export const collections = {
  'news': newsCollection,
};