import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://auravoid.dev',
  integrations: [mdx(), sitemap(), tailwind(), prefetch()],
});
