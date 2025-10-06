// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  runtimeConfig: {
    public: {
      apiBase: import.meta.env.API_BASE_URL || '/api'
    }
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image'],
  css: ['@/assets/main.scss', '@/assets/client.scss'],
  app: {
      pageTransition: {name: 'page', mode: 'out-in', appear: true},
      layoutTransition: { name: 'layout', mode: 'out-in', appear: true },
  },
  googleFonts: {
    families: {
      Nunito: [100, 300, 400, 700],
      Montserrat: [100, 300, 400]
    },
    subsets: ['cyrillic'] // важно, иначе русские буквы могут быть без поддержки
  }
})
