// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx({
        syntaxHighlight: false,
        rehypePlugins: [
          /**
           * Adds ids to headings
           */
          rehypeSlug,
          [
            /**
             * Enhances code blocks with syntax highlighting, line numbers,
             * titles, and allows highlighting specific lines and words
             */
   
            rehypePrettyCode,
            {
              theme: 'github-dark',
            },
          ],
        ],
      }),, sitemap(), tailwind()],
});