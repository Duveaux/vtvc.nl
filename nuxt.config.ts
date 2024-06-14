// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    routeRules: {
      // API routes cache shorter than the main route, to make sure a new invokation triggers ISR
      '/api/spotify': { isr: 29, swr: 1 },
      '/api/lastfm-stats': { isr: 59 },
      '/api/aotw': { isr: 12 * 60 * 60 },
      '/api/hass': { isr: 59 },
      '/api/duolingo': { isr: false }, // Cache happens at proxy level.

      // Main route
      '/**': { isr: 60 },
    },
  },

  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', 'nuxt-icon'],
})
