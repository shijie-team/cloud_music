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
import Register from './views/Account/Register'
import Mine from './views/Account/Mine'
import Setname from './views/Account/Setname'
import Data from './views/Account/Data'
import Mycontent from './views/Account/Mycontent'
import Childmusic from './views/Account/accountchildren/Childmusic'
import Childstate from './views/Account/accountchildren/Childstate'
import Childmynews from './views/Account/accountchildren/Childmynews'
import Mynews from './views/Account/Mynews'
import Enter from './views/Account/Enter'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path:'/',component:FindMusic},
  {path:'/findMusic',component:FindMusic},
  {path:'/myMusic',component:MyMusic},
  {path:'/news',component:News},
  {path:'/account',component:Account},
  {path:'/register',component:Register},
  {path:'/mine',component:Mine},
  {path:'/setname',component:Setname},
  {path:'/data',component:Data},
  {path:'/mycontent',component:Mycontent,children:[
  		{path:'',component:Childmusic},
  		{path:'childmusic',component:Childmusic},
  		{path:'childstate',component:Childstate},
  		{path:'childmynews',component:Childmynews}
  		
  ]},
  {path:'/mynews',component:Mynews},
  {path:'/enter',component:Enter}
]
const router = new VueRouter({
  routes:routes
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
})
