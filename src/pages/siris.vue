<template>
  <div>
    <div class="mb-4 text-3xl">
      Siris
    </div>
    <div class="w-96 h-96">
      <img class="w-full h-full" src="/sirisvisual.jpg">
    </div>
    <div class="grid grid-cols-7 w-full sm:w-96 mt-4">
      <button class="col-span-2 border rounded-l-full py-2 focus:outline-none" :class="setStyle(0)" @click="someObject.third = 0">
        Any
      </button>
      <button class="border py-2 focus:outline-none" :class="setStyle(1)" @click="someObject.third = 1">
        1+
      </button>
      <button class="border py-2 focus:outline-none" :class="setStyle(2)" @click="someObject.third = 2">
        2+
      </button>
      <button class="border py-2 focus:outline-none" :class="setStyle(3)" @click="someObject.third = 3">
        3+
      </button>
      <button class="border py-2 focus:outline-none" :class="setStyle(4)" @click="someObject.third = 4">
        4+
      </button>
      <button class="border rounded-r-full py-2 focus:outline-none" :class="setStyle(5)" @click="someObject.third = 5">
        5+
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      someObject: {
        first: '',
        second: null,
        third: 0
      }
    }
  },
  head () {
    return {
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Renters_Land' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Sirisvisual - TW' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Beaugrenelle, Paris, France; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.' },
        { hid: 'twitter:url', name: 'twitter:url', content: `https://nuxtssr-13112.web.app${this.$route.path}` },
        { hid: 'twitter:image', name: 'twitter:image', content: '/sirisvisual.jpg' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt SSR Test' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `https://nuxtssr-13112.web.app${this.$route.path}` },
        { hid: 'og:title', property: 'og:title', content: 'Sirisvisual - OG' },
        { hid: 'og:description', property: 'og:description', content: 'Beaugrenelle, Paris, France; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.' },
        { hid: 'og:image', property: 'og:image', content: '/sirisvisual.jpg' },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: '/sirisvisual.jpg' }
      ]
    }
  },
  methods: {
    setStyle (v) {
      if (v === this.someObject.third) {
        return 'bg-black border-black text-white'
      }
      return 'bg-transparent border-gray-300 text-black'
    }
  }
}
</script>
