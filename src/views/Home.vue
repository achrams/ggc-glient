<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue';
import JoinDiscord from '@/components/JoinDiscord.vue';
import Opening from '@/components/Opening.vue';
import ServerStatus from '@/components/ServerStatus.vue';
import Vote from '@/components/Vote.vue'

window.scrollTo(0,0)
</script>

<template>
  <div class="relative w-full min-h-screen">
    <meta name="google-adsense-account" content="ca-pub-9693141473366441">
    <!-- Background -->
    <!-- Content -->
    <div class="w-full mt-40 md:mt-20 flex flex-col items-center">
      <div class="container mx-auto p-4 my-4 md:my-8 lg:my-40">
        <div class="flex flex-col items-center">
          <img src="../assets/img/ggc_logo.png" alt="logo_main" class="h-2/4 md:h-2/6 lg:h-1/6 w-2/4 md:w-2/6 lg:w-1/6">
          <Opening class="mt-12" />
          <ServerStatus class="mt-24 md:mt-24" />
          <div id="about"></div>
          <AboutUs class="mt-24 md:mt-36" />
          <Vote class="mt-24 md:mt-48" />
          <JoinDiscord class="mt-24 md:mt-48 mb-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home-bg {
  background: url('../assets/img/bg2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
