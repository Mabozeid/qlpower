// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/i18n"],
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
    vueI18n: "fefgrtg",   
},
plugins: [
  '~/plugins/vue-lazyload.js'
],
})