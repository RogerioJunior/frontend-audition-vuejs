import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PhotoCard from '../views/PhotoCard.vue'

Vue.use(VueRouter)

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
    path: '/photo-card',
    name: 'PhotoCard',
    component: PhotoCard
  }
]

const router = new VueRouter({
  routes
})

export default router
