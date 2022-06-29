import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      name:'Login',
      path:'/login',
      component: ()=> import('@/views/login.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        component:()=>import('../views/404.vue')
    }
  ]
})

export default router
