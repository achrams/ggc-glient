<script setup lang="ts">
import iziToast from 'izitoast'
import { ref } from 'vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import axios from 'axios'
import { useHead } from '@vueuse/head';

const accordions = ref([false, false, false, false])
const username = ref('')
const discord = ref('')
const message = ref('')
const isLoading = ref(false)
const errors = ref({
  username: '',
  discord: '',
  message: ''
})

useHead({
  title: 'Contact',
  meta:[
    {
      name:"google-adsense-account",
      content:"ca-pub-9693141473366441"
    }
  ]
})

const toggleAccordion = (index: number) => {
  accordions.value[index] = !accordions.value[index]
}

const validateForm = () => {
  let valid = true
  errors.value = {
    username: '',
    discord: '',
    message: ''
  }

  if (!username.value) {
    errors.value.username = 'Username is required.'
    valid = false
  }

  if (!discord.value) {
    errors.value.discord = 'discord is required.'
    valid = false
  }

  if (!message.value) {
    errors.value.message = 'Message is required.'
    valid = false
  }

  return valid
}

const submitForm = () => {
  isLoading.value = true
  if (validateForm()) {
    axios.post('https://discord.com/api/webhooks/1296863456645087264/fmZC_un6R99vcLfFneeNYRYrCgwv3MAVRYuojqn9MNfYIsfb7IW-UPXbqCCcM66rPQ1D', {
      embeds: [
        {
          title: 'Contact Support Submission',
          fields: [
            { name: 'Sender', value: username.value },
            { name: 'Discord Username', value: discord.value },
            { name: 'Message', value: message.value }
          ]
        }
      ]
    })
      .then(res => {
        console.log(res)
        isLoading.value = false
        username.value = ''
        discord.value = ''
        message.value = ''
        iziToast.show({
          message: "Form Submitted.",
          timeout: 3000,
          theme: "light",
          position: "topRight"
        })
      })
      .catch(err => {
        console.log(err)
        isLoading.value = false
      })
  }
}

window.scrollTo(0,0)
</script>

<template>
  <div class="relative w-full min-h-screen mt-12 md:mt-32 mb-40 flex flex-col items-center">
    <div class="w-full mt-12 px-2 flex flex-wrap items-center justify-center">
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#39BEFF]">FREQUENTLY ASKED</h1>
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold ml-2 md:ml-4 text-white">QUESTION</h1>
    </div>
    <div class="my-4 p-1">
      <p class="text-white text-center text-sm md:text-md lg:text-lg">Pertanyaan umum yang sering ditanyakan pemain
        tentang cara bermain di server GukGukCraft.</p>
    </div>
    <div class="container mx-auto my-12">
      <div class="flex w-full flex-col items-center justify-center my-2">
        <div
          class="flex flex-col w-full md:w-3/4 text-white bg-gray-900 justify-between items-center rounded-lg duration-300 delay-150 relative"
          :class="accordions[0] == true ? 'h-48 md:h-44 items-start' : 'h-16 items-center'">
          <div class="flex w-full" @click="toggleAccordion(0)">
            <div
              class="py-2 px-4 w-11/12 h-16 text-start flex items-center cursor-pointer top-0 bg-gray-800 rounded-l-lg">
              Bang cara login gimana?</div>
            <div
              class="w-1/12 h-16 font-extrabold text-2xl flex items-center justify-center cursor-pointer top-0 right-0 bg-gray-800 rounded-r-lg">
              {{ accordions[0] == true ? '-' : '+' }}
            </div>
          </div>
          <div class="p-4 w-full h-full flex items-center"
            :class="accordions[0] == true ? 'opacity-100 pointer-events-auto delay-150 duration-300' : 'opacity-0 pointer-events-none delay-50 duration-100'">
            Sesudah join server, silahkan jalankan perintah /register {password}, ganti {password} dengan password
            kalian agar akun kalian lebih aman.
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center my-2">
        <div
          class="flex flex-col w-full md:w-3/4 text-white bg-gray-900 justify-between items-center rounded-lg duration-300 delay-150 relative"
          :class="accordions[1] == true ? 'h-64 md:h-44 items-start' : 'h-16 items-center'">
          <div class="flex w-full" @click="toggleAccordion(1)">
            <div
              class="py-2 px-4 w-11/12 h-16 text-start flex items-center cursor-pointer top-0 bg-gray-800 rounded-l-lg">
              Bang Bedrock bisa join?</div>
            <div
              class="w-1/12 h-16 font-extrabold text-2xl flex items-center justify-center cursor-pointer top-0 right-0 bg-gray-800 rounded-r-lg">
              {{ accordions[1] == true ? '-' : '+' }}
            </div>
          </div>
          <div class="p-4 w-full h-full flex items-center"
            :class="accordions[1] == true ? 'opacity-100 pointer-events-auto delay-150 duration-300' : 'opacity-0 pointer-events-none delay-50 duration-100'">
            Bisa, server kita crossplay, akan tetapi kami menyarankan menggunakan Java Client seperti Pojav atau
            Minecraft launcher di PC untuk pengalaman lebih.
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center my-2">
        <div
          class="flex flex-col w-full md:w-3/4 text-white bg-gray-900 justify-between items-center rounded-lg duration-300 delay-150 relative"
          :class="accordions[2] == true ? 'h-48 md:h-44 items-start' : 'h-16 items-center'">
          <div class="flex w-full" @click="toggleAccordion(2)">
            <div
              class="py-2 px-4 w-11/12 h-16 text-start flex items-center cursor-pointer top-0 bg-gray-800 rounded-l-lg">
              Bang Resource Packnya kok ga keliatan?</div>
            <div
              class="w-1/12 h-16 font-extrabold text-2xl flex items-center justify-center cursor-pointer top-0 right-0 bg-gray-800 rounded-r-lg">
              {{ accordions[2] == true ? '-' : '+' }}
            </div>
          </div>
          <div class="p-4 w-full h-full flex items-center"
            :class="accordions[2] == true ? 'opacity-100 pointer-events-auto delay-150 duration-300' : 'opacity-0 pointer-events-none delay-50 duration-100'">
            Pastikan kalian menghidupkan Server Resource pack di list join server kalian untuk mendapatkan pengalaman
            lebih.
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center my-2">
        <div
          class="flex flex-col w-full md:w-3/4 text-white bg-gray-900 justify-between items-center rounded-lg duration-300 delay-150 relative"
          :class="accordions[3] == true ? 'h-72 md:h-48 items-start' : 'h-16 items-center'">
          <div class="flex w-full" @click="toggleAccordion(3)">
            <div
              class="py-2 px-4 w-11/12 h-16 text-start flex items-center cursor-pointer top-0 bg-gray-800 rounded-l-lg">
              Bang kok aku kebakar? Bang kok aku kedinginan?</div>
            <div
              class="w-1/12 h-16 font-extrabold text-2xl flex items-center justify-center cursor-pointer top-0 right-0 bg-gray-800 rounded-r-lg">
              {{ accordions[3] == true ? '-' : '+' }}
            </div>
          </div>
          <div class="p-4 w-full h-full flex items-center"
            :class="accordions[3] == true ? 'opacity-100 pointer-events-auto delay-150 duration-300' : 'opacity-0 pointer-events-none delay-50 duration-100'">
            Kita menerapkan Dynamic Weather, pastikan kalian mengecek server sedang dalam musim apa, dan pastikan suhu
            tubuh kalian tidak kurang dari -20 derajat dan lebih dari 50 derajat, suhu bisa disesuakan dengan menaruh
            air atau torch disekitar kalian.
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto my-12">
      <div class="flex flex-col items-center">
        <div class="w-full mt-12 px-2 flex items-center justify-center">
          <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold text-[#39BEFF]">CONTACT</h1>
          <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold ml-2 md:ml-4 text-white">SUPPORT</h1>
        </div>
        <div class="my-4 p-1">
          <p class="text-white text-center text-sm md:text-md lg:text-lg">Ada hal yang perlu ditanyakan? Contact kami
            melalui form dibawah.</p>
        </div>
        <div class="w-full md:w-3/4 p-1">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minecraft
            Username*</label>
          <input v-model="username" id="username" type="text" placeholder="Username"
            :class="{ 'border-red-500': errors.username }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
        </div>
        <div class="w-full md:w-3/4 p-1">
          <label for="discord" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discord Username*</label>
          <input v-model="discord" id="discord" type="text" placeholder="Discord username" :class="{ 'border-red-500': errors.discord }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <p v-if="errors.discord" class="text-red-500 text-xs mt-1">{{ errors.discord }}</p>
        </div>
        <div class="w-full md:w-3/4 p-1">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message*</label>
          <textarea v-model="message" name="message" id="message" :class="{ 'border-red-500': errors.message }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your message"></textarea>
          <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
        </div>
        <div class="w-full md:w-3/4 p-1 mt-12 mb-8">
          <button v-if="!isLoading" @click="submitForm"
            class="w-full rounded-xl bg-[#39BEFF] p-2 text-white text-md hover:bg-blue-900 h-14">Submit</button>
          <button v-else disabled class="w-full rounded-xl p-2 text-white text-md bg-blue-900">
            <ScaleLoader class="h-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
