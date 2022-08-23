<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="w-full h-screen flex justify-center flex-col items-center">
    <p class="mb-5">This is a template using 
      <a href="https://vuejs.org/guide/introduction.html" class="font-bold">Vue 3</a> + 
      <a class="font-bold" href="https://vitejs.dev/">Vite</a>,
      <a class="font-bold" href="https://v3.router.vuejs.org/api/">Vue Router</a> & 
      <a class="font-bold" href="https://tailwindcss.com/">Tailwind CSS</a>
    </p>
    <button class="uppercase" type="button" @click="count++">count is <span class="font-bold">{{ count }}</span></button>
  </div>
</template>

