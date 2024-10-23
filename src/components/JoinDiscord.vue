<template>
  <div class="w-full text-center text-2xl transition-transform duration-500" :class="{
    'showing': isVisible,
    'hiding': !isVisible
  }">
    <div>
      <span class="text-white">
        <span>Have a</span>
        <span class="text-[#39BEFF] mx-1">problem</span>
        <span>or want to get in touch with others?</span>
      </span>
    </div>
    <div>
      <span class="text-white">
        <span>join our</span>
        <span class="text-[#39BEFF] mx-1">Discord</span>
        <span>Now!</span>
      </span>
    </div>
    <div class="mt-8">
      <div class="p-2">
        <button title="Copy Link"
          class="py-2 px-8 rounded-xl border border-gray-600 hover:bg-gray-600 duration-200 delay-100 text-white"
          @click="openDiscord()">
          Join Discord
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JoinDiscord',
  data() {
    return {
      isVisible: false,
    }
  },
  computed: {
    height() {
      return window.innerHeight
    }
  },
  methods: {
    openDiscord() {
      window.open('https://discord.gg/eNSXhfy', '_blank')
    },
    checkScrollPosition() {
      if (this.height <= 1080)
        this.isVisible = window.scrollY >= 1400
      else if (this.height > 1080)
        this.isVisible = window.scrollY >= 1000
      else
        this.isVisible = window.scrollY >= 2000
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollPosition)
    this.checkScrollPosition() // Initial check
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition)
  }
})
</script>

<style scoped>
/* Custom transition classes to avoid Tailwind CSS naming conflict */
.transition-transform {
  transition: transform 0.5s, opacity 0.5s;
}

.showing {
  transform: translateY(0);
  opacity: 1;
}

.hiding {
  transform: translateY(5rem);
  /* Adjust this value for the amount of movement */
  opacity: 0;
}
</style>
