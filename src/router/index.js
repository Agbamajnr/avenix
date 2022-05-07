import { createRouter, createWebHistory } from 'vue-router'
import Authentication from '../views/Authentication.vue'


const routes = [
  {
    path:'/',
    redirect: '/auth',
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Authentication
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
