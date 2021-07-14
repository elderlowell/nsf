<template>
  <div>
    <div class="mb-4 text-3xl">
      Eugene
    </div>
    <div class="w-96 h-96">
      <img class="w-full h-full" src="/eugene.jpg">
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Renters_Land' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Eugene - TW' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Red and Blue Lighted Building; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.' },
        { hid: 'twitter:url', name: 'twitter:url', content: `https://nuxtssr-13112.web.app${this.$route.path}` },
        { hid: 'twitter:image', name: 'twitter:image', content: '/eugene.jpg' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt SSR Test' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `https://nuxtssr-13112.web.app${this.$route.path}` },
        { hid: 'og:title', property: 'og:title', content: 'Eugene - OG' },
        { hid: 'og:description', property: 'og:description', content: 'Red and Blue Lighted Building; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.' },
        { hid: 'og:image', property: 'og:image', content: '/eugene.jpg' },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: '/eugene.jpg' }
      ]
    }
  }
}
</script>
