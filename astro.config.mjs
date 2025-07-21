import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://d4vgfx.com',
  base: '/',
  outDir: './dist',
  build: {
    format: 'directory',
  }
});