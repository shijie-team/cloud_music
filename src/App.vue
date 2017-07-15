<template>
  <div id="app">
    <div class="wrap">
      <router-view></router-view>
    </div>
    <ul class="footer">
      <li><router-link to="/findMusic"><i class="iconfont icon-diantaibaoshe"></i>发现音乐</router-link></li>
      <li><router-link to="/myMusic"><i class="iconfont icon-mianxingtubiaoyinle"></i>我的音乐</router-link></li>
      <li><router-link to="/news"><i class="iconfont icon-pengyou"></i>音乐资讯</router-link></li>
      <li><router-link to="/mine"><i class="iconfont icon-wode"></i>账号</router-link></li>
    </ul>
  </div>
</template>
<script>
import SongList from './components/songList'
import FindMusic from './views/FindMusic'

	export default{
		name:'app',
		components:{
			SongList,FindMusic
		}
	}
</script>
<style scoped>
@import "./assets/css/reset.css";
@import "./assets/css/index.css";
.router-view{width: 100%;height: 90%;}
</style>
