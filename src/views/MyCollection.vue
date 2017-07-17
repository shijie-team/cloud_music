<template lang="html">
<div class="myCollection">
  <div class="header">
      <ul>
        <li @click="goback"><i class="iconfont icon-shang-copy-copy"></i></li>
        <li>我的收藏</li>
        <li><i class="iconfont icon-paixingbang"></i></li>
      </ul>
  </div>
  <div class="navBox">
      <div class="nav">
          <ul class="navList">
            <li>专辑</li>
            <li>歌手</li>
            <li>MV</li>
            <li>专栏</li>
          </ul>
      </div>
  </div>
  <Search></Search>
</div>
</template>

<script>
import Search from '../components/Search.vue'

export default {
  data(){
    return{}
  },
  components:{
    Search
  },
  methods:{
    goback(){
      this.$router.push({path: '/MyMusic'});
    }
  }
}
</script>

<style lang="css" scoped>
.myCollection{width: 100%;font-size: .4rem;}
.header{ width: 100%;height: 1.07rem;background: #333;color: #f0f0f0;font-weight: 800;}
.header ul {width: 100%;height: 100%;overflow: hidden;}
.header ul li{width: 33%;height: 100%;float: left;line-height: 1.07rem;}
.header ul li:nth-child(2){font-size: .45rem;text-align: center;}
.header ul li:first-child{text-align: left;padding-left: .33rem;}
.header ul li:last-child{text-align: right;padding-right: .33rem;}
.iconfont{font-size: .6rem}

.navBox,.nav,.navList{width: 100%}
.navList{height: 1rem;background: #fffff1;}
.navList li{width: 25%;float: left;line-height: 1rem;text-align: center;}


</style>
