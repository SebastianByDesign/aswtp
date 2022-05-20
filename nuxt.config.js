export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'A Short Walk To Pluto | Official Band Website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The official website of the Toronto indie rock band, A Short Walk to Pluto.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'A Short Walk To Pluto | Official Band Website' },
      { property: 'og:url', content: 'ashortwalktopluto.com' },
      { property: 'og:description', content: 'The official website of the Toronto indie rock band, A Short Walk to Pluto.' },
      { property: 'og:site_name', content: 'ASWTP' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//db.onlinewebfonts.com/c/aa442bba8f51fdba33dbfb52c98720cf?family=Alvaro+Condensed' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/audio-player.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },

  shopify: {
    domain: 'ashortwalktopluto.myshopify.com',
    storefrontAccessToken: 'c61a9395df5ab8cd7d18c0d4c5f78d35',
    unoptimized: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.storyblok.com/
    [
      'storyblok-nuxt',
      {
        accessToken: 'cst5r6Ecnc78DKh5PrYQTAtt',
        cacheProvider: 'memory',
      }
    ],
    // https://github.com/Gomah/nuxt-shopify
    'nuxt-shopify'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
