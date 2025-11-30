import { z, defineCollection } from 'astro:content';

// 관광지 데이터의 규칙(Schema)을 정의합니다.
const spotsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),       // 관광지 이름 (필수)
    category: z.string(),    // 분류 (자연, 문화유산 등)
    region: z.string(),      // 지자체 (구례, 하동 등)
    distance: z.number(),    // 거리 (숫자만, km)
    time: z.string(),        // 소요시간 (예: "10분")
    image: z.string().optional(), // 대표 이미지 주소 (없을 수도 있음)
    address: z.string().optional(), // 주소
  }),
});

export const collections = {
  'spots': spotsCollection,
};