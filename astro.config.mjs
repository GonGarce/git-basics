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
          label: 'Referencias rápidas',
          translations: {
            en: 'Quick Reference',
          },
          autogenerate: { directory: 'reference' },
        },
      ],
      // Establece el inglés como el idioma predeterminado para este sitio.
      defaultLocale: 'root',
      locales: {
        // Documentación en inglés en `src/content/docs/en/`
        en: {
          label: 'English',
          lang: 'en',
        },
        // Documentación en árabe en `src/content/docs/es/`
        root: {
          label: 'Español',
          lang: 'es',
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
