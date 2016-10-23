import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import routes from './router'

import './style/reset.css'
import './style/px2rem.scss'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
