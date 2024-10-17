// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import { loadEnv } from "vite";

const { ALGOLIA_API_KEY, ALGOLIA_APP_ID, ALGOLIA_INDEX_NAME } = loadEnv(
  process.env.NODE_ENV ?? "",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  site: 'https://gongarce.github.io',
  base: 'git-basics',
  integrations: [
    starlight({
      title: "Git Basics",
      social: {
        github: "https://github.com/gongarce/Git-Basics"
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" }
          ]
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" }
        }
      ],
      plugins: [
        starlightDocSearch({
          appId: ALGOLIA_APP_ID,
          apiKey: ALGOLIA_API_KEY, 
          indexName: ALGOLIA_INDEX_NAME
        })
      ]
    })
  ]
});
