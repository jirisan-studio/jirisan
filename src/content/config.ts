import { z, defineCollection } from 'astro:content';

const spotsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    category: z.string(),
    region: z.string(),
    distance: z.number(),
    time: z.string(),
    image: z.string().optional(),
    address: z.string().optional(),
    lat: z.number().optional(), // ✨ 추가됨: 위도
    lng: z.number().optional(), // ✨ 추가됨: 경도
  }),
});

export const collections = {
  'spots': spotsCollection,
};