<template>
  <div class="w-full text-center">
    <h2 class="text-md md:text-xl lg:text-2xl font-bold text-white">SURVIVAL MINECRAFT SERVER</h2>
    <h1 class="text-2xl md:text-4xl lg:text-7xl font-extrabold text-[#39BEFF]">PLAY.GUKGUKCRAFT.ID</h1>
    <div class="my-4">
      <p class="text-white text-sm md:text-md lg:text-lg">GukGukCraft Minecraft Server memberikan pengalaman crossplay
        dan custom resource pack dengan dynamic weather dan berbagai fitur menarik lainnya.</p>
    </div>
    <div class="my-4">
      <p class="text-white text-sm md:text-md lg:text-lg">Bergabung dan main bersama temanmu!</p>

      <div class="my-4 flex justify-center">
        <div class="p-2">
          <button title="Copy Link" class="py-2 px-4 rounded-xl bg-[#39BEFF]/60 hover:bg-[#39BEFF] duration-200 delay-100 text-white" @click="copyLink()">Copy
            IP</button>
        </div>
        <div class="p-2">
          <button
            href="#about"
            title="Learn More"
            class="py-2 px-4 rounded-xl border border-gray-600 hover:bg-gray-600 duration-200 delay-100 text-white"
            v-smooth-scroll
            >Learn
            More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iziToast from 'izitoast'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Opening',
  methods: {
    copyLink() {
      navigator.clipboard.writeText('play.gukgukcraft.id')
        .then(() => {
          iziToast.show({
            message: "Copied to Clipboard.",
            timeout: 3000,
            theme: "light",
            position: "topRight"
          })
        })
        .catch((err) => {

        })
    }
  }
})
</script>