import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'GukGukCraft'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    },
    {
      path: '/donasi',
      name: 'donasi',
      meta: {
        title: 'Donation'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Donasi.vue')
    },
    {
      path: '/donasi/form',
      name: 'payment',
      meta: {
        title: 'Payment Form'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Payment.vue')
    },
    {
      path: '/team',
      name: 'team',
      meta: {
        title: 'GGC Team'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Team.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Contact.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'GukGukCraft'
  next();
})

export default router
