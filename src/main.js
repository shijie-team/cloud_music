// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FindMusic from './views/FindMusic'
import MyMusic from './views/MyMusic'
import News from './views/News'
import Account from './views/Account'
import MusicPlayer from './views/MusicPlayer'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path:'*',redirect:'/musicPlayer'},
  {path:'/musicPlayer',component:MusicPlayer},
  {path:'/findMusic',component:FindMusic},
  {path:'/myMusic',component:MyMusic},
  {path:'/news',component:News},
  {path:'/account',component:Account}
]
const router = new VueRouter({
  routes:routes
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router,
  store
})
