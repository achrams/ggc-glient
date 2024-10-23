<template>
  <div class="about-container w-full p-4 text-white" :class="fadeClass">
    <div class="about-content p-8 w-full bg-gray-900/[.5] rounded-xl">
      <h1 :class="fadeClass" class="text-2xl md:text-2xl lg:text-4xl font-bold">Siapa Kami?</h1>
      <div :class="fadeClass" class="w-[100px] border-[3px] border-[#39BEFF]"></div>
      <div class="flex flex-wrap w-full justify-between items-center">
        <div :class="fadeClass" class="w-full md:w-5/6">
          <p class="text-justify mt-8">
            GukGukCraft adalah rumah bagi para pemain Minecraft yang haus petualangan dan kreativitas. Sejak didirikan
            pada tahun 2021, kami telah menjadi pusat komunitas yang ramah dan menyenangkan bagi para penggemar
            Minecraft dari berbagai penjuru. Di GukGukCraft, kami menawarkan pengalaman unik yang tidak hanya berfokus
            pada bertahan hidup, tetapi juga memperkaya permainan dengan fitur-fitur spesial. Dengan semangat komunitas
            yang kuat, kami bertekad untuk memberikan pengalaman bermain yang tak terlupakan dan memuaskan bagi semua
            anggota kami. Sertai kami di GukGukCraft dan temukan dunia tak terbatas di Minecraft bersama komunitas kami
            yang hangat dan ramah!
          </p>
        </div>
        <div :class="fadeClass" class="w-full md:w-1/6 p-2 flex justify-center">
          <img src="@/assets/img/gukguk.png" class="h-[175px]" alt="gukguk">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutUs',
  data() {
    return {
      fadeClass: 'fade-in'
    };
  },
  computed: {
    height() {
      return window.innerHeight
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.height <= 1080)
        if (window.scrollY >= 450) {
          this.fadeClass = 'fade-in';
        } else {
          this.fadeClass = 'fade-out move-down';
        }
      else
        if (window.scrollY >= 0) {
          this.fadeClass = 'fade-in';
        } else {
          this.fadeClass = 'fade-out move-down';
        }
    }
  }
})
</script>
