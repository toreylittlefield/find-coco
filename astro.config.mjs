// @ts-check
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify'

import { loadEnv } from 'vite'

const NODE_ENV = process.env.NODE_ENV
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.',
  )
}

const env = loadEnv(NODE_ENV, process.cwd(), '')
const PUBLIC_SITE_DOMAIN = env.PUBLIC_SITE_DOMAIN

if (!PUBLIC_SITE_DOMAIN) {
  throw new Error(
    'The PUBLIC_SITE_DOMAIN environment variable is required but was not specified.',
  )
}

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
  site: PUBLIC_SITE_DOMAIN,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'fbq'],
        resolveUrl: function (url) {
          if (url.hostname === 'connect.facebook.net') {
            const baseURL = new URL('https://lostdogcoco.com')
            const netlifyFunctionPath = '/.netlify/functions/partytown-proxy'
            const proxyUrl = new URL(netlifyFunctionPath, baseURL)

            proxyUrl.searchParams.append('url', url.href)
            return proxyUrl
          }
          return url
        },
      },
    }),
  ],
  adapter: netlify(),
})
