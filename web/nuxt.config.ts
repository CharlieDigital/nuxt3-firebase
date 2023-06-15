// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // nitro: {
  //   "preset": "firebase"
  // },
  routeRules: {
    // https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
    '/': { prerender: true },
    '/client-app/**': { ssr: false },
    '/rendered/**': { swr: true }
  }
})
