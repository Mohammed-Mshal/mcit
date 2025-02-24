import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMinistry from '@/views/AboutMinistry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aboutministry',
      name: 'about',
      component: AboutMinistry,
    },
  ],
})

export default router
