<template>
  <meta name="google-adsense-account" content="ca-pub-9693141473366441">
  <div class="relative w-full min-h-screen mt-12 md:mt-32 mb-40 flex flex-col items-center">
    <div class="w-full mt-12 px-2 flex items-center justify-center">
      <h1 class="text-2xl md:text-4xl lg:text-7xl font-extrabold text-[#39BEFF]">GUKGUKCRAFT</h1>
      <h1 class="text-2xl md:text-4xl lg:text-7xl font-extrabold ml-2 md:ml-4 text-white">TEAM</h1>
    </div>
    <h2 class=" px-4 text-md md:text-xl lg:text-2xl font-bold text-white uppercase text-center">List semua pengurus yang
      ada di server kami</h2>
    <h2 class=" px-4 text-md md:text-xl lg:text-2xl font-bold text-red-600 uppercase text-center mt-12">Leader</h2>
    <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
      <Character alt="gukgukgame" :url="gukgukgame" role="Leader" name="gukgukgame" />
    </div>
    <h2 class=" px-4 text-md md:text-xl lg:text-2xl font-bold text-orange-600 uppercase text-center mt-12">Developers</h2>
    <div class="flex flex-wrap justify-center w-full">
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="kill3rbyte" :url="killerbyte" role="Developer" name="kill3rbyte" color="text-orange-600" />
      </div>
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="ardgin" :url="ardgin" role="Developer" name="ardgin" />
      </div>
    </div>
    <h2 class=" px-4 text-md md:text-xl lg:text-2xl font-bold text-green-600 uppercase text-center mt-12">Helpers</h2>
    <div class="flex flex-wrap justify-center w-full">
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="arshtatine" :url="arshtatine" role="Helper" name="arshtatine" />
      </div>
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="misdukun" :url="misdukun" role="Helper" name="misdukun" />
      </div>
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="blackflagbaby" :url="blackflagbaby" role="Helper" name="BlackFlag" />
      </div>
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="ffirefox" :url="ffirefox" role="Helper" name="ffirefoxx" />
      </div>
    </div>
    <h2 class=" px-4 text-md md:text-xl lg:text-2xl font-bold text-purple-700 uppercase text-center mt-12">Builder</h2>
    <div class="flex flex-wrap justify-center w-full">
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="icheem" :url="icheem" role="Builder" name="icheem" />
      </div>
      <div class="w-2/5 lg:w-2/12 p-1 my-4 flex flex-col items-center">
        <Character alt="titoyxcoo" :url="titoyxcoo" role="Builder" name="titoyxcoo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Character from '@/components/Character.vue';
import gukgukgame from '@/assets/img/chars/gukgukgame.png'
import killerbyte from '@/assets/img/chars/kill3rbyte.png'
import ardgin from '@/assets/img/chars/ardgin.png'
import misdukun from '@/assets/img/chars/kaito.png'
import arshtatine from '@/assets/img/chars/arsh.png'
import blackflagbaby from '@/assets/img/chars/mankbim.png'
import ffirefox from '@/assets/img/chars/firefox.png'
import icheem from '@/assets/img/chars/icheem.png'
import titoyxcoo from '@/assets/img/chars/titoy.png'

window.scrollTo(0,0)
</script>