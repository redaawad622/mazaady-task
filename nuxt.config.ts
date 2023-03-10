// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'https://staging.mazaady.com/api/v1/',
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
});
