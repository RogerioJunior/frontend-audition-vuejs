import Vue from 'vue'
import VueRouter from 'vue-router'
import PhotoCard from '../views/PhotoCard.vue'
import PhotoList from '../views/PhotoList.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/photo-card',
    name: 'PhotoCard',
    component: PhotoCard,
    props: true
  },
  {
    path: '/photo-list',
    name: 'PhotoList',
    component: PhotoList,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
