<script>
import { ref, inject } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const count = ref(0)
    const API_ENDPOINT = inject('ApiEndpoint');

    axios.get(API_ENDPOINT + '/address')
    .then((res) => {
      console.log(res)
    })

    return {
      count,
      API_ENDPOINT
    }
  }
}
</script>

<template>
  <div class="w-full h-screen flex justify-center flex-col items-center">
    <p class="mb-2">This is a template using 
      <a href="https://vuejs.org/guide/introduction.html" class="font-bold">Vue 3</a> + 
      <a class="font-bold" href="https://vitejs.dev/">Vite</a>,
      <a class="font-bold" href="https://v3.router.vuejs.org/api/">Vue Router</a> & 
      <a class="font-bold" href="https://tailwindcss.com/">Tailwind CSS</a>
    </p>
    <p class="mb-5">Your API is running on <a class="font-bold" target="_blank" :href="API_ENDPOINT">{{ API_ENDPOINT }}</a></p>
    <button class="uppercase" type="button" @click="count++">count is <span class="font-bold">{{ count }}</span></button>
  </div>
</template>

