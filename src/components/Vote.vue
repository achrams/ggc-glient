<template>
  <div class="w-full text-center">
    <h1
      class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#39BEFF] transition-all duration-700 ease-in-out transform"
      :class="showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"
    >
      VOTE SERVER GUKGUKCRAFT
    </h1>
    <div class="flex justify-center mt-12 md:mt-24">
      <div
        class="p-2 bg-gray-900/[.5] rounded-xl text-white w-full flex flex-wrap justify-between md:w-11/12 lg:w-2/4 transition-opacity duration-700 ease-in-out"
        :class="showContent ? 'opacity-100' : 'opacity-0'"
      >
        <div
          class="p-2 w-full md:w-1/3 transition-transform duration-700 ease-in-out delay-[100ms]"
          :class="showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
        >
          <div class="bg-black/[0.3] flex justify-start items-center rounded-xl cursor-pointer hover:scale-110" @click="openInNewTab('https://minecraft-mp.com/server-s330270')">
            <div class="p-2 w-1/3 md:w-1/3 relative">
              <img src="@/assets/img/vote.png" alt="mc multi">
            </div>
            <div class="text-center md:text-start w-2/3">
              <h4 class="text-md md:text-xs lg:text-xs font-bold">MC MULTIPLAYER</h4>
              <span class="text-white inline-flex text-md md:text-xs lg:text-xs">
                <p class="text-yellow-500">VOTE</p>
                <p class="mx-1">US HERE!</p>
              </span>
            </div>
          </div>
        </div>

        <div
          class="p-2 w-full md:w-1/3 transition-transform duration-700 ease-in-out delay-[300ms]"
          :class="showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
        >
          <div class="bg-black/[0.3] flex justify-start items-center rounded-xl cursor-pointer hover:scale-110" @click="openInNewTab('https://minecraftpocket-servers.com/server/127173/')">
            <div class="p-2 w-1/3 md:w-1/3 relative">
              <img src="@/assets/img/vote.png" alt="mc pocket">
            </div>
            <div class="text-center md:text-start w-2/3">
              <h4 class="text-md md:text-xs lg:text-xs font-bold">MC BEDROCK SERVER</h4>
              <span class="text-white inline-flex text-md md:text-xs lg:text-xs">
                <p class="text-yellow-500">VOTE</p>
                <p class="mx-1">US HERE!</p>
              </span>
            </div>
          </div>
        </div>

        <div
          class="p-2 w-full md:w-1/3 transition-transform duration-700 ease-in-out delay-[500ms]"
          :class="showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
        >
          <div class="bg-black/[0.3] flex justify-start items-center rounded-xl cursor-pointer hover:scale-110" @click="openInNewTab('https://topminecraftservers.org/server/19993')">
            <div class="p-2 w-1/3 md:w-1/3 relative">
              <img src="@/assets/img/vote.png" alt="mc top">
            </div>
            <div class="text-center md:text-start w-2/3">
              <h4 class="text-md md:text-xs lg:text-xs font-bold">TOP MC SERVER</h4>
              <span class="text-white inline-flex text-md md:text-xs lg:text-xs">
                <p class="text-yellow-500">VOTE</p>
                <p class="mx-1">US HERE!</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Vote',
  data() {
    return {
      showContent: false,
    };
  },
  computed: {
    height() {
      return window.innerHeight
    }
  },
  methods: {
    handleScroll() {
      if(this.height <= 1080)
      this.showContent = window.scrollY >= 1000;
      else 
      this.showContent = window.scrollY >= 600;
    },
    openInNewTab (url:String) {
      window.open(url as string, '_blank')
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
</style>
