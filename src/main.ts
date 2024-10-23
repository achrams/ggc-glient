import './assets/main.css'
import 'izitoast/dist/css/iziToast.min.css'
import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from './App.vue'
import router from './router'
const app = createApp(App)
const head = createHead()
app.use(head)
app.use(VueSmoothScroll)
app.use(createPinia())
app.use(router)
app.mount('#app')
