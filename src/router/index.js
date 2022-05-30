import { createRouter, createWebHistory } from 'vue-router'
import Authentication from '../views/Authentication.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Authentication
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
