<template lang="html">
  <div class="receentPlay2">
    <div class="header">
        <ul>
          <li @click="goback"><i class="iconfont icon-shang-copy-copy"></i></li>
          <li>最近播放的歌曲</li>
          <li @click="playMusic"><i class="iconfont icon-paixingbang"></i></li>
        </ul>
  </div>
  <div class="playList">

    <div class="palyListInfo" v-for="item in obj"@click="playMusic(item)">

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
export default {
  methods:{
    goback(){
      this.$router.push({path: '/MyMusic'});
    },
    playMusic(singleSong){
        localStorage.setItem('singleSong',JSON.stringify(singleSong));
        this.$router.push({path: '/musicPlayer'})
    }
  }
}
</script>

<style lang="css" scoped>


.header{ position: fixed;top: 0;width: 100%;height: 1.07rem;background: #333;color: #f0f0f0;font-weight: 800;}
.header ul {width: 100%;height: 100%;overflow: hidden;}
.header ul li{width: 33%;height: 100%;float: left;line-height: 1.07rem;}
.header ul li:nth-child(2){font-size: .45rem;text-align: center;}
.header ul li:first-child{text-align: left;padding-left: .33rem;}
.header ul li:last-child{text-align: right;padding-right: .33rem;}
.iconfont{font-size: .6rem}

.palyListInfo{padding:.23rem;}
.palyListInfo{width: 100%;height: 1.6rem;}
.listInfoLeft{width: 17%;float: left;height: 100%;}
.listInfoRight{width: 83%;float: right;;text-align: left;height: 100%;border-bottom: 1px solid #ccc}
.listInfoLeft img{width: 1.2rem;}
</style>
