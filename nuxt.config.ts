// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/leaflet'],
  plugins: [
    { src: '~/plugins/highcharts.client.js', mode: 'client'}
  ],
})