import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home }
  ]
})
