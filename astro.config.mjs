// @ts-check
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    // bahasa indonesia and english
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    tailwind({ applyBaseStyles: false }),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],
  adapter: netlify(),
})
