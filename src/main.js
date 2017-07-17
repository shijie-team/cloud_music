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
<<<<<<< HEAD
import RecentPlay2 from './views/RecentPlay2'

=======
import Member from './views/Account/member'
import free from './views/Account/free'
import shop from './views/Account/shop'
import Hunt from './components/hunt'
>>>>>>> 7b37ba0fc5c321e0c4c98a5df46f1bd63066e206
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
<<<<<<< HEAD
  // {path:'*',redirect:'/findMusic'},
  // {path:'*',redirect:'/musicPlayer'},
=======
  // {path:'*',redirect:'/musicPlayer'},
  {path:'/musicPlayer',component:MusicPlayer},
  {path:'*',redirect:'/findMusic'},
>>>>>>> 7b37ba0fc5c321e0c4c98a5df46f1bd63066e206
  {path:'/musicPlayer',component:MusicPlayer},
  {path:'/findMusic',component:FindMusic},
  {path:'/myMusic',component:MyMusic},
  {path:'/news',component:News},
  {path:'/account',component:Account},
  {path:'/register',component:Register},
  {path:'/mine',component:Mine},
  {path:'/setname',component:Setname},
  {path:'/data',component:Data},
  {path:'/mycontent',component:Mycontent,children:[
  		{path:'/',component:Childmusic},
  		{path:'childmusic',component:Childmusic},
  		{path:'childstate',component:Childstate},
  		{path:'childmynews',component:Childmynews}

  ]},
  {path:'/mynews',component:Mynews},
  {path:'/enter',component:Enter},
  {path:'/member',component:Member},
  {path:'/free',component:free},
  {path:'/shop',component:shop},
  {path:'/localMusic',component:LocalMusic,children:[
    {path:'/',redirect:"single"},
    {path:'single',component:Single,children:[
      {path:'/',redirect:"songs"},
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
<<<<<<< HEAD
  {path:'/recentPlay2',component:RecentPlay2}
=======
	{path:'/hunt',component:Hunt}
>>>>>>> 7b37ba0fc5c321e0c4c98a5df46f1bd63066e206
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
