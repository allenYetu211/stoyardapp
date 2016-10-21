import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import App from './App'
import TheContact from './view/TheContact.vue'

import './style/reset.css'
require('./style/px2rem.scss')

Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
