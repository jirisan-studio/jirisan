// @ts-check
import { defineConfig } from 'astro/config';
import tailwind, tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind(), tailwindcss()],
  },
});