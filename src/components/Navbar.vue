<template>
  <div>
    <!-- Navbar -->
    <div class="navbar w-full fixed top-0 left-0 z-50 transition-colors duration-300 ease-in-out"
      :class="{ 'bg-[#24272B]/[.9]': isScrolled, 'bg-transparent': !isScrolled }">
      <div class="container mx-auto">
        <div :class="{
          'flex flex-wrap items-center w-full justify-between p-4 transition-colors duration-300 ease-in-out': true,
          'h-16 md:h-24': !toggleMenu,
          'h-fit md:h-24': toggleMenu
        }">
          <!-- Logo and Title -->
          <div class="flex items-center w-7/8 md:w-1/5 cursor-pointer" @click="toHome()">
            <img class="w-[40px]" src="@/assets/img/ggc_logo.png" alt="ggc_nav_icon" />
            <h1 class="mx-5 text-xl font-bold text-white">GukGukCraft</h1>
          </div>

          <!-- Mobile menu button (only visible on small screens) -->
          <div class="sm:hidden w-1/8">
            <button title="dropdown mobile menu"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="showMenu()">
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <!-- Navigation links -->
          <div
            class="flex flex-col md:flex-row w-full md:w-3/5 my-2 md:my-0 justify-end transition-all duration-500 ease-in-out"
            :class="{
              'max-h-96 opacity-100 pointer-events-auto': toggleMenu,
              'max-h-0 opacity-0 pointer-events-none': !toggleMenu,
              'md:max-h-none md:opacity-100 md:pointer-events-auto': true
            }">
            <RouterLink to="/" :class="currentPath === '/' ? activeClass : baseClass" @click="toggleMenu = false"
              class="nav-link transition duration-300 ease-in-out transform hover:scale-105 mx-0 md:mx-2">
              Home
            </RouterLink>
            <RouterLink to="/donasi" :class="currentPath === '/donasi' ? activeClass : baseClass" @click="toggleMenu = false"
              class="nav-link transition duration-300 ease-in-out transform hover:scale-105 mx-0 md:mx-2">
              Donasi
            </RouterLink>
            <RouterLink to="/team" :class="currentPath === '/team' ? activeClass : baseClass" @click="toggleMenu = false"
              class="nav-link transition duration-300 ease-in-out transform hover:scale-105 mx-0 md:mx-2">
              Team GGC
            </RouterLink>
            <RouterLink to="/contact" :class="currentPath === '/contact' ? activeClass : baseClass" @click="toggleMenu = false"
              class="nav-link transition duration-300 ease-in-out transform hover:scale-105 mx-0 md:mx-2">
              Contact
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      toggleMenu: false,
      isScrolled: false, // New state for scroll detection
      baseClass: 'text-white text-lg cursor-pointer py-1 px-2 rounded-xl',
      activeClass: 'text-white text-lg rounded-xl bg-teal-700 py-1 px-2 cursor-pointer',
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  mounted() {
    // Detect scroll and change navbar background
    window.addEventListener('scroll', this.handleScroll);
    this.isScrolled = false
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Change background color when the user scrolls down
      if (this.toggleMenu == false)
        this.isScrolled = window.scrollY > 0;
    },
    showMenu() {
      if (this.isScrolled == false)
        this.isScrolled = true
      else
        if (window.scrollY == 0)
          this.isScrolled = false

      this.toggleMenu = !this.toggleMenu
    },
    toHome() {
      this.$router.push('/')
    }
  }
})
</script>
