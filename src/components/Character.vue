<template>
  <div class="flex flex-col justify-center items-center bg-black/[.6] p-2 rounded-lg w-full">
    <img :src="url" :alt="alt" class="h-32">
    <h2 class=" px-2 text-sm md:text-lg lg:text-lg font-bold text-white uppercase text-center">{{name}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Character',
  props: ['url','alt','role','name', 'color']
})
</script>

<style scoped></style>