import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import App from './App'
import TheContact from './view/TheContact'
import Information from './view/Information'
import Word from './view/word'

import './style/reset.css'
import './style/px2rem.scss'

Vue.use(VueRouter)

const routes = [
    { path: '/word', name: 'word', component: Word },
    { path: '/TheContact', name: 'TheContact', component: TheContact },
    { path: '/Information', name: 'Information', component: Information },
    { path: '*', redirect: '/TheContact' }
]
var router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
