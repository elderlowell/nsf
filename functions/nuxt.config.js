module.exports = {
  head: {
    title: 'nuxt-ssr-fb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  loading: {
    color: '#38597a'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
    publicPath: 'public',
    extractCSS: true
  }
}
