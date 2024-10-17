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
          items: [
            {
              label: 'Sistemas de Control de Versiones',
              slug: 'guides/cvs',
              translations: {
                en: 'Version Control Systems',
              },
            },
            {
              label: 'Sistemas de Control de Versiones Distribuídos',
              slug: 'guides/dcvs',
              translations: {
                en: 'Distributed Version Control Systems',
              },
            },
          ],
        },
        {
          label: 'Primeros pasos con Git',
          translations: {
            en: 'First steps with Git',
          },
          items: [
            {
              label: 'Crear y clonar repositorios',
              slug: 'git-first-steps/create-and-clone',
              translations: {
                en: 'Creating and cloning repositories',
              },
            },
          ],
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
