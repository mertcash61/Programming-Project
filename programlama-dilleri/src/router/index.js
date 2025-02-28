import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LanguageDetail from '../views/LanguageDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/language/:id',
    name: 'LanguageDetail',
    component: LanguageDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 