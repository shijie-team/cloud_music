<template lang="html">
<div class="myCollection">
  <div class="header">
      <ul>
        <li @click="goback"><i class="iconfont icon-shang-copy-copy"></i></li>
        <li>我的收藏</li>
        <li @click="playMusic"><i class="iconfont icon-paixingbang"></i></li>
      </ul>
  </div>
  <div class="myCollectionInnerBox">

    <div class="navBox">
      <div class="nav">
        <ul class="navList">
          <li>歌曲</li>
          <li>歌手</li>
          <li>MV</li>
          <li>专栏</li>
        </ul>
      </div>
    </div>
    <Search :title="searchTitle" @searchInput="changeArr"></Search>

    <div class="palyListInfo" v-for="item in obj"
    @click="playMusic(item)" v-if="item.albumtitle.toLowerCase().indexOf(keyWord.toLowerCase())!==-1">

    <div class="listInfoLeft">
      <img :src="item.picture" alt="">
    </div>

    <div class="listInfoRight">
      <p class="listInfoRightTil">{{item.albumtitle}}</p>
      <span>{{item.artist_name}}</span>

    </div>

  </div>
  </div>

</div>
</template>

<script>
import Search from '../components/Search.vue'

export default {
  data(){
    return{
      obj:[],
      getKeyWord:'',
      searchTitle:"搜索收藏的歌曲"

    }
  },
  components:{
    Search
  },
  computed:{
      keyWord:function(){
      return this.getKeyWord
      }
  },
  methods:{
    goback(){
      this.$router.push({path: '/MyMusic'});
    },
    playMusic(singleSong){
        localStorage.setItem('singleSong',JSON.stringify(singleSong));
        this.$router.push({path: '/musicPlayer'})
    },
    changeArr(val){
        console.log(val);
        console.log(this.obj);
        this.getKeyWord = val;
    }

  },
  mounted:function(){
  this.obj = JSON.parse(localStorage.getItem('collectioned'));
  console.log(this.obj);

  }
}
</script>

<style lang="css" scoped>
.myCollection{width: 100%;font-size: .4rem;}

.myCollection{width: 100%;height: 100%;overflow: auto;}
.header{ position: fixed;top: 0;width: 100%;height: 1.07rem;background: #333;color: #f0f0f0;font-weight: 800;}
.header ul {width: 100%;height: 100%;overflow: hidden;}
.header ul li{width: 33%;height: 100%;float: left;line-height: 1.07rem;}
.header ul li:nth-child(2){font-size: .45rem;text-align: center;}
.header ul li:first-child{text-align: left;padding-left: .33rem;}
.header ul li:last-child{text-align: right;padding-right: .33rem;}
.iconfont{font-size: .6rem}

.navBox,.nav,.navList{width: 100%}
.navList{height: 1rem;background: #fffff1;}
.navList li{width: 25%;float: left;line-height: 1rem;text-align: center;}

.palyListInfo{padding:.23rem;}
.palyListInfo{width: 100%;height: 1.6rem;}
.listInfoLeft{width: 17%;float: left;height: 100%;}
.listInfoRight{width: 83%;float: right;;text-align: left;height: 100%;border-bottom: 1px solid #ccc}
.listInfoLeft img{width: 1.2rem;}
</style>
