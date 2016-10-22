import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import routes from './router'

import './style/reset.css'
import './style/px2rem.scss'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
