import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vitechco.com',
  server: {
    port: 3000,
    host: true,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
