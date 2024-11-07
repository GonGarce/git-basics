// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { loadEnv } from 'vite';

const { ALGOLIA_API_KEY, ALGOLIA_APP_ID, ALGOLIA_INDEX_NAME } = loadEnv(
  process.env.NODE_ENV ?? '',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  site: 'https://gongarce.github.io',
  base: '/git-basics',
  integrations: [
    starlight({
      title: 'Git Basics',
      social: {
        github: 'https://github.com/gongarce/Git-Basics',
      },
      sidebar: [
        {
          label: 'Introducción',
          translations: {
            en: 'Introduction',
          },
          autogenerate: { directory: '0-intro' },
        },
        {
          label: 'Primeros pasos con Git',
          translations: {
            en: 'First steps with Git',
          },
          autogenerate: { directory: '1-first-steps' },
        },
        {
          label: 'Trabajando con ramas',
          translations: {
            en: 'Working with branches',
          },
          autogenerate: { directory: '2-branches' },
        },
        {
          label: 'Referencias rápidas',
          translations: {
            en: 'Quick Reference',
          },
          autogenerate: { directory: 'reference' },
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      plugins: [
        starlightDocSearch({
          appId: ALGOLIA_APP_ID,
          apiKey: ALGOLIA_API_KEY,
          indexName: ALGOLIA_INDEX_NAME,
        }),
      ],
    }),
  ],
});
