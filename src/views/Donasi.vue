<script setup lang="ts">
import { data_list, type Item } from '../data'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const current = ref(0)
const direction = ref('')

const changeType = (val: string) => {
  if (val === 'prev') {
    direction.value = 'left';
    current.value = (current.value - 1 + data_list.length) % data_list.length;
  } else if (val === 'next') {
    direction.value = 'right';
    current.value = (current.value + 1) % data_list.length;
  }
}

const changeList = (x: number) => {
  current.value = x
  direction.value = 'none'
}

const purchase = () => {
  router.push('/donasi/form?type=' + data_list[current.value].type)
}

window.scrollTo(0,0)

</script>
<template>
  <div class="relative w-full h-screen">
    <meta name="google-adsense-account" content="ca-pub-9693141473366441">
    <div class="md:container mx-auto md:p-4 my-4 md:my-8 lg:my-12">
      <div class="w-full h-full mt-20 flex flex-col items-center">
        <h1 class="px-1 md:px-0 text-xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#39BEFF] mt-12 md:mt-24">
          GUKGUKCRAFT DONATION LIST</h1>
        <div class="flex justify-center items-center mt-12 md:mt-24 w-full md:w-3/4">
          <div class="w-1/12 text-center hidden md:flex justify-center">
            <button class="p-0 flex justify-center font-bold lg:font-extrabold text-white text-md md:text-xl"
              @click="changeType('prev')"><span class="material-symbols-outlined">
                arrow_back_ios
              </span></button>
          </div>
          <div class="w-full md:w-10/12 relative">
            <div v-for="(slide, i) in data_list" :key="i" class="w-full h-full flex flex-col items-center">
              <div v-if="current == i"
                class="absolute bg-black/[.8] z-20 w-full h-full fade-in duration-700 delay-300 text-center flex flex-col justify-center items-center rounded-lg">
                <h5 :class="{
                  'text-red-600 text-2xl md:text-4xl lg:text-5xl my-6': slide.title == '[LORD]',
                  'text-orange-500 text-2xl md:text-4xl lg:text-5xl my-6': slide.title == '[VVIP]',
                  'text-yellow-500 text-2xl md:text-4xl lg:text-5xl my-6': slide.title == '[VIP]',
                }">{{ slide.title }}</h5>
                <h5 v-for="(benefit, j) in slide.benefits" :key="j" class="text-white text-center">{{ benefit }}</h5>
              </div>
              <img v-if="current == i" class="rounded-lg duration-700 delay-100 fade-in min-h-[350px] w-full"
                :src="slide.img" :alt="slide.title" :id="'donasi-' + i" />
            </div>
          </div>
          <div class="w-1/12 text-center hidden md:flex justify-center">
            <button class="p-0 flex justify-center font-bold lg:font-extrabold text-white text-md md:text-xl"
              @click="changeType('next')"><span class="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
          </div>
        </div>
        <div class="container mx-auto w-full md:w-3/4">
          <div class="w-full flex justify-center">
            <div class="flex justify-center items-center mt-8 my-12 md:my-24 w-full md:w-3/4">
              <div v-for="(item, x) in data_list" :key="x" class="w-1/3 relative cursor-pointer" @click="changeList(x)">
                <div
                  class="absolute z-20 w-full h-full text-center flex justify-center items-center rounded-lg duration-150 delay-75 p-1">
                  <div :class="current == x ? '' : 'bg-black/70'" class="h-full w-full rounded">
                    <h5 :class="{
                      'text-red-600 text-lg md:text-2xl lg:text-5xl my-6': item.title == '[LORD]',
                      'text-orange-500 text-lg md:text-2xl lg:text-5xl my-6': item.title == '[VVIP]',
                      'text-yellow-500 text-lg md:text-2xl lg:text-5xl my-6': item.title == '[VIP]',
                    }">{{ item.title }}</h5>
                  </div>
                </div>
                <img :src="item.img" :alt="item.title + ' thumb ' + x" class="rounded-lg p-1">
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center mb-24">
            <div class="w-full md:w-2/3 lg:w-1/3 p-1">
              <button class="bg-[#39BEFF] p-2 text-white w-full rounded-xl text-2xl hover:bg-blue-900"
                @click="purchase">Purchase {{ data_list[current].type }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
