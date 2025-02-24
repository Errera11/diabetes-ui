// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primeuix/themes/nora'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', 'nuxt-svgo', '@nuxt/eslint'],
  primevue: {
    options: {
      theme: {
        preset: Lara,
      },
    },
  },
  css: ['~/assets/styles/index.scss'],
})
