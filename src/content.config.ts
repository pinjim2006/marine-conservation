import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/news',
	}),
	schema: ({ image }) => z.object({
		title: z.string(),
		date: z.date(),
		summary: z.string(),
		cover: image(),
		author: z.string(),
        draft: z.boolean().default(false),
	}),
});

export const collections = {
	news: newsCollection,
};

