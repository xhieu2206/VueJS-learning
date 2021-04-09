import Vue from 'vue';
import VueRouter from 'vue-router';

import New from '../screens/New/New.vue';
import Auth from '../screens/Auth/Auth.vue';
import List from '../screens/List/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/items/new',
    name: 'New',
    component: New
  },
  {
    path: '/items',
    component: List,
    exact: true
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '*',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
