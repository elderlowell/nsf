<template>
  <div>
    <div class="w-full bg-blue-900">
      <div class="mx-auto flex">
        <div class="p-4" :class="{ 'bg-blue-500': $route.path === '/' }">
          <nuxt-link to="/" class="text-white">
            Home
          </nuxt-link>
        </div>
        <div class="p-4" :class="{ 'bg-blue-500': $route.path === '/siris' }">
          <nuxt-link to="/siris" class="text-white">
            Siris
          </nuxt-link>
        </div>
        <div class="p-4" :class="{ 'bg-blue-500': $route.path === '/eugene' }">
          <nuxt-link to="/eugene" class="text-white">
            Eugene
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="p-4">
      <Nuxt />
    </div>
  </div>
</template>
