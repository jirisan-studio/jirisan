import { z, defineCollection } from 'astro:content';

const spotsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),           // 장소 이름
    category: z.string(),        // 카테고리 (자연, 문화유산 등)
    region: z.string(),          // 지역 (구례, 하동 등)
    distance: z.number(),        // 거리 (숫자)
    time: z.string(),            // 소요 시간
    image: z.string().optional(), // 이미지 (선택 사항)
    address: z.string().optional(), // 주소 (선택 사항)
    lat: z.number().optional(),   // 위도 (선택 사항)
    lng: z.number().optional(),   // 경도 (선택 사항)
  }),
});

export const collections = {
  'spots': spotsCollection,
};