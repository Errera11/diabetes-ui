import Lara from '@primevue/themes/lara'
// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      // eslint-disable-next-line node/prefer-global/process
      MODEL_API_URL: process.env.NUXT_APP_MODEL_URL,
    },
  },
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    'nuxt-svgo',
    'nuxt-swiper',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/index.scss";',
        },
      },
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Lara,
      },
    },
  },
})
