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
import LocalMusic from './views/LocalMusic'
import RecentPlay from './views/RecentPlay'
import MyFm from './views/MyFm'
import MyCollection from './views/MyCollection'
import Single from './views/Single.vue'
import Program from './views/Program.vue'
import Mv from './views/Mv.vue'
import Songs from './views/singleViews/Songs.vue'
import Singer from './views/singleViews/Singer.vue'
import Special from './views/singleViews/Special.vue'
import SongList from './components/songList'
import Hunt from './components/hunt'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  // {path:'*',redirect:'/findMusic'},
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
  {path:'/enter',component:Enter},
  {path:'/localMusic',component:LocalMusic,children:[
    {path:'/',component:Single},
    {path:'single',component:Single,children:[
      {path:'/',component:Songs},
      {path:'songs',component:Songs},
      {path:'singer',component:Singer},
      {path:'special',component:Special}
    ]},
    {path:'program',component:Program},
    {path:'mv',component:Mv}
  ]},
  {path:'/recentPlay',component:RecentPlay},
  {path:'/myFm',component:MyFm},
  {path:'/myCollection',component:MyCollection},
	{path:'/songList',component:SongList},
	{path:'/hunt',component:Hunt}
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
