<template>
  <div class="w-full fixed bg-[#24272B]/[.5] bottom-0 duration-300 delay-100" :class="showFooter ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'">
  <div class="container mx-auto p-4 text-white">
    <span class="text-gray-300 flex flex-wrap text-xs md:text-md lg:text-lg py-2">
      <span class="whitespace-nowrap">Copyright © 2024</span>
      <span class="text-white mx-1 whitespace-nowrap">GukGukCraft</span>
      <span class="whitespace-nowrap">- All Rights Reserved.</span>
    </span>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      showFooter: false
    }
  },
  computed: {
    height() {
      return window.innerHeight
    },
    currentPath() {
      return this.$route.path;
    }
  },
  methods: {
    handleScroll () {
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
      this.showFooter = window.scrollY >= maxScrollY;
    }
  },
  mounted() {
    
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
})
</script>