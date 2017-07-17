<template lang="html">
  <div class="singlePage">
    <div class="navWrap">
        <ul class="navBox">
            <router-link to="/localMusic/single/songs"><li><p><span>歌曲</span><span> 2</span></p></li></router-link>
            <router-link to="/localMusic/single/singer"><li><p><span>歌手</span><span> 1</span></p></li></router-link>
            <router-link to="/localMusic/single/special"><li><p><span>专辑</span><span> 1</span></p></li></router-link>
        </ul>
        <Search></Search>
        <router-view></router-view>
    </div>
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
  }
}
</script>

<style lang="css" scoped>
.navBox .router-link-active li p span:first-child{color: rgb(205, 70, 124);}
.navBox .router-link-active li p {border-bottom: 5px solid rgb(205, 70, 124)}
.navBox li p span:first-child{font-size: .4rem;font-weight: 600;}
.navBox li p span:last-child{color: #999;font-size: .4rem;}
.singlePage,.navWrap,.navBox{width: 100%;}
.navBox{height:1.07rem;background: rgb(247, 245, 250);}
.navBox li{width:33%;float:left;font-size:.5rem;line-height:1.07rem;text-align: center;}
</style>
