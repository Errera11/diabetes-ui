import { definePreset } from '@primeuix/themes'
import Lara from '@primevue/themes/lara'

// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

const MyPreset = definePreset(Lara, {
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              background: 'rgb(139, 115, 85)',
              hoverBackground: 'rgba(139, 115, 85, 0.45)',
              activeBackground: 'rgb(139, 115, 85)',
              borderColor: 'rgb(139, 115, 85)',
              hoverBorderColor: 'rgba(139, 115, 85, 0.45)',
              activeBorderColor: 'rgb(139, 115, 85)',
            },
          },
        },
        dark: {
          root: {
            primary: {
              background: 'rgb(139, 115, 85)',
              hoverBackground: 'rgba(139, 115, 85, 0.45)',
              activeBackground: 'rgb(139, 115, 85)',
              borderColor: 'rgb(139, 115, 85)',
              hoverBorderColor: 'rgba(139, 115, 85, 0.45)',
              activeBorderColor: 'rgb(139, 115, 85)',
            },
          },
        },
      },
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      // eslint-disable-next-line node/prefer-global/process
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    'nuxt-svgo',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-highcharts',
    '@nuxt/icon',
  ],
  css: ['/assets/styles/index.scss'],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
        },
      },
    },
    components: {
      exclude: ['Form', 'FormField', 'Editor'],
    },
  }
})