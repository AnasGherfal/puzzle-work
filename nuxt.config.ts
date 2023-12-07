import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['@/assets/global.scss'],

  typescript: {
    tsConfig: {
      "extends": "../../../tsconfig.base.json"
    }
  },
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },



})