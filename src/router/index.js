import Vue from 'vue'
import VueRouter from 'vue-router'
// import Painter from '../views/Painter.vue'
import Layout from '../views/Layout'
import UI from '../views/UI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  },
  {
    path: '/ui',
    name: 'UI',
    component: UI
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
