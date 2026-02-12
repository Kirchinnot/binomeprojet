import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import AboutView from '@/views/AboutView.vue'
import HomePageView from '@/views/HomePageView.vue'

const routes = [
  {
    path : "/",
    name : "Home",
    component : HomePageView,
  },
  {
    path : "/about",
    name : "About",
    component : AboutView,
  },
  {
    path : "/dashboard",
    name : "Dashboard",
    component : DashboardView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
