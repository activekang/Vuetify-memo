import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortView from '../views/PortView'
import MemoView from '../views/MemoView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/memo',
    name: 'memo',
    component: MemoView
  },
  {
    path: '/port',
    name: 'portfolio',
    component: PortView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
