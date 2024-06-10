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
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxtjs/i18n",
    'nuxt-aos',
	  ['nuxt-mail',
		  {
			  message: {
				  to: 'Sales@ql-power.co' // this will be changed to client mail that he will receive mail on it 
			  },
			  smtp: {
				  host: "gator4015.hostgator.com",
				  port: 465,
				  auth: {
					  user: 'contactus@ql-power.co',
					  pass: 'ioPYayZPP?@d',
				  },
			  },
		  }],
  ],
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
})