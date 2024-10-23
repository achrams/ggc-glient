<template>
  <meta name="google-adsense-account" content="ca-pub-9693141473366441">
  <div class="relative w-full mt-12 md:mt-32 mb-40 flex flex-col items-center">
    <div class="w-full mt-12 px-2 flex items-center justify-center">
      <h2 class=" px-4 text-md md:text-xl lg:text-2xl font-bold text-white uppercase text-center">Payment Form</h2>
    </div>
    <div class="container mx-auto my-12">
      <div class="flex flex-col items-center">
        <div class="w-3/4 p-1">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minecraft
            Username*</label>
          <input v-model="username" id="username" type="text" placeholder="Username"
            :class="{ 'border-red-500': errors.username }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
        </div>
        <div class="w-3/4 flex flex-wrap">
          <div class="flex flex-col p-1 w-full md:w-1/2 mt-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
              Name*</label>
            <input v-model="first_name" id="first_name" type="text" placeholder="First Name"
              :class="{ 'border-red-500': errors.first_name }"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <p v-if="errors.first_name" class="text-red-500 text-xs mt-1">{{ errors.first_name }}</p>
          </div>
          <div class="flex flex-col p-1 w-full md:w-1/2 mt-4">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
              Name*</label>
            <input v-model="last_name" id="last_name" type="text" placeholder="Last Name"
              :class="{ 'border-red-500': errors.last_name }"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <p v-if="errors.last_name" class="text-red-500 text-xs mt-1">{{ errors.last_name }}</p>
          </div>
        </div>
        <div class="w-3/4 flex flex-wrap">
          <div class="flex flex-col p-1 w-full md:w-1/2 mt-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email*</label>
            <input v-model="email" id="email" type="text" placeholder="Email"
              :class="{ 'border-red-500': errors.email }"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
          </div>
          <div class="flex flex-col p-1 w-full md:w-1/2 mt-4">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone*</label>
            <input v-model="phone" id="phone" type="text" placeholder="Phone"
              :class="{ 'border-red-500': errors.phone }"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
          </div>
        </div>
        <div class="w-3/4 my-4">
          <div class="w-full flex justify-between border-b">
            <div class="flex p-1 w-full md:w-1/2 mt-4">
              <h5 class="text-white">Total</h5>
            </div>
            <div class="flex flex-wrap justify-between p-1 w-full md:w-1/2 mt-4">
              <div class="w-full md:w-1/2">
                <h5 class="text-white text-right md:text-start">{{ `1 x ${type}` }}</h5>
              </div>
              <div class="w-full md:w-1/2">
                <h5 class="text-white text-right">{{ formatMoney(price) }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="w-3/4 p-1 my-4">
          <button v-if="!isLoading" @click="submitForm"
            class="w-full rounded-xl bg-[#39BEFF] p-2 text-white text-md hover:bg-blue-900 h-14">Submit</button>
          <button v-else disabled
            class="w-full rounded-xl p-2 text-white text-md bg-blue-900"><ScaleLoader class="h-10" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import { data_list } from '../data'
export default defineComponent({
  name: 'Payment',
  data() {
    return {
      isLoading: false,
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      price: 0,
      type: '',
      errors: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
      }
    };
  },
  components: {
    ScaleLoader
  },
  methods: {
    validateForm() {
      let valid = true;
      this.errors = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
      };

      // Username validation
      if (!this.username) {
        this.errors.username = 'Username is required.';
        valid = false;
      }

      // First Name validation
      if (!this.first_name) {
        this.errors.first_name = 'First name is required.';
        valid = false;
      }

      // Last Name validation
      if (!this.last_name) {
        this.errors.last_name = 'Last name is required.';
        valid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        this.errors.email = 'Email is required.';
        valid = false;
      } else if (!emailPattern.test(this.email)) {
        this.errors.email = 'Please enter a valid email address.';
        valid = false;
      }

      // Phone validation
      const phonePattern = /^[0-9]+$/;
      if (!this.phone) {
        this.errors.phone = 'Phone number is required.';
        valid = false;
      } else if (!phonePattern.test(this.phone)) {
        this.errors.phone = 'Phone number must contain only digits.';
        valid = false;
      }

      return valid;
    },
    submitForm() {
      if (this.validateForm()) {
        this.isLoading = true
        let parameter = {
          transaction_detail: {
            gross_amount: this.price
          },
          customer_detail: {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone
          },
          username: this.username,
          type: this.type
        }

        axios.post('https://api.gukgukcraft.id/payment', {
          parameter
        })
        .then(res => {
          this.isLoading = false
          console.log(res.data.transaction)
          if(res.status == 201) {
            this.$router.push('/donasi')
            window.open(res.data.transaction.redirect_url, '_blank')
          }
        })
        .catch(err => {
          this.isLoading = false
        })
      }
    },
    formatMoney(amount: number) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(amount)
    }
  },
  created() {
    window.scrollTo(0, 0);
    if (this.$route.query) {
      this.type = this.$route.query.type?.toString()!
      this.price = data_list.find(x => x.title == `[${this.type}]`)?.price!
    }
  }
});
</script>
