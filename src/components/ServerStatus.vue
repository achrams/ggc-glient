<template>
  <div class="w-full flex justify-center items-center duration-700 delay-100" :class="showStatus ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'">
    <div class="p-4 bg-gray-900/[.5] rounded-xl text-white w-full flex flex-wrap justify-between md:w-11/12 lg:w-2/4">
      <div class="p-2 w-full md:w-6/12">
        <div v-if="!discordLoad" class="bg-black/[0.3] flex justify-start items-center rounded-xl">
          <div class="p-1 w-1/3 md:w-1/3">
            <img src="@/assets/img/discord.png" alt="discord logo">
          </div>
          <div>
            <h4>DISCORD SERVER</h4>
            <span class="text-white inline-flex"><p class="text-yellow-500">{{ discordCount }}</p><p class="mx-1">Users Online</p></span>
          </div>
        </div>
        <div v-else class="bg-black/[0.3] flex justify-center items-center h-full">
          <ScaleLoader />
        </div>
      </div>
      <div class="p-2 w-full md:w-6/12">
        <div v-if="!serverLoad" class="bg-black/[0.3] flex justify-start items-center rounded-xl">
          <div class="p-4 w-1/3 md:w-1/3 relative">
            <span :class="{ 
              'bg-green-600' : serverOnline,
              'absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75 top-0 right-0 mt-3 mr-3' : true
             }"></span>
            <img src="@/assets/img/mc.webp" alt="mc logo">
          </div>
          <div>
            <h4>MINECRAFT SERVER</h4>
            <span v-if="serverOnline" class="text-white inline-flex"><p class="text-yellow-500">{{ serverCount }}</p><p class="mx-1">Players Online</p></span>
            <span v-else class="text-red-600 inline-flex">Server Offline</span>
          </div>
        </div>
        <div v-else class="bg-black/[0.3] flex justify-center items-center h-full">
          <ScaleLoader />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServerStatus',
  components: {
    ScaleLoader
  },
  data() {
    return {
      discordCount: 0,
      serverCount: 0,
      serverOnline: false,
      showStatus: false,
      discordLoad: false,
      serverLoad: false
    }
  },
  computed: {
    height() {
      return window.innerHeight
    }
  },
  methods: {
    getDiscordStatus () {
      this.discordLoad = true
      axios.get('https://discord.com/api/guilds/551618172638330881/widget.json')
      .then(res => {
        if(res.status == 200) {
          this.discordCount = res.data.presence_count
          this.discordLoad = false
        }
      })
    },
    getServerStatus () {
      this.serverLoad = true
      axios.get('https://api.mcsrvstat.us/3/play.gukgukcraft.id')
      .then(res => {
        if(res.status == 200) {
          if(res.data.online) {
            this.serverCount = res.data.players.online
            this.serverOnline = res.data.online
          }
          this.serverLoad = false
        }
      })
    },
    handleScroll () {
      if (this.height <= 1080)
        this.showStatus = window.scrollY >= 50
      else if (this.height > 1080)
        this.showStatus = window.scrollY >= 0
      else
        this.showStatus = window.scrollY >= 1000
    }
  },
  created() {
    this.getDiscordStatus()
    this.getServerStatus()
    if(this.height > 1080) this.showStatus = true
  },
  mounted() {
    // Detect scroll and change navbar background
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
})
</script>