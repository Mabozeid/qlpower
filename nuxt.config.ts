// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/swiper.css',
    '~/assets/css/main.css'
  ],
  build: {
    transpile: ['swiper'],
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/i18n", 'nuxt-aos', 'nuxt-swiper'],
  i18n: {
    strategy: "no_prefix",
    lazy: false,
    langDir: 'locales/',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ar',
        iso: 'ar-AR',
        name: 'العربية',
        file: 'ar.json'
      },
    ],
},
plugins: [
  '~/plugins/vue-lazyload.js'
],
swiper: {
  // Swiper options
  //----------------------
  prefix: 'Swiper',
  styleLang: 'css',
  modules: ['navigation', 'pagination'] 
  // modules: ['navigation', 'pagination']   , // all modules are imported by default
},
})