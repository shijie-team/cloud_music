<template lang="html">
  <div id="myMusic" >
      <router-view></router-view>
    <div class="innerWrap" @scroll="scrollFn()" ref="innerWrap">
      <!-- 顶部隐藏 -->
      <transition name="fadeDown">
        <div class="titleMoreBox" v-show="toggle2" >
          <div class="more">
            <ul class="moreList">
              <li class="moreInfo"><span class="moreInfoLeft"><i class="iconfont icon-unie644"></i></span>&nbsp;&nbsp;<span>新建歌单</span></li>
              <li class="moreInfo"><span class="moreInfoLeft"><i class="iconfont icon-paixingbang"></i></span>&nbsp;&nbsp;<span>管理歌单</span></li>
              <li class="moreInfo"><span class="moreInfoLeft"><i class="iconfont icon-gengduo_tinggemianliuliang_"></i></span>&nbsp;&nbsp;<span>我的音乐云盘</span></li>
            </ul>
          </div>
          <div class="hide" @click="toggle2=false" >
        </div>
        </div>
      </transition>
      <!-- 頭部 -->
      <div class="header">
        <ul>
          <li @click='toggle2=!toggle2'>更多</li>
          <li>我的音乐</li>
          <li @click="playMusic"><i class="iconfont icon-paixingbang"></i></li>
        </ul>
      </div>
      <!-- 頭部列表 -->
      <div class="playBox">
          <div class="PlayList">
              <div class="PlayListInfo">
                  <!-- 本地音乐 -->
                  <router-link to="LocalMusic">
                    <div class="playInfoItem">
                      <div class="infoLeft">
                        <i class="iconfont icon-mianxingtubiaoyinle"></i>
                        <span class="texInfo">本地音乐</span>
                      </div>
                      <div class="infoRight">
                        <span>0 </span>
                        <i class="iconfont icon-houdongfangiconfont24"></i>
                      </div>
                    </div>
                  </router-link>
                  <!-- 最近播放 -->
                  <router-link to="RecentPlay">
                  <div class="playInfoItem">
                    <div class="infoLeft">
                      <i class="iconfont icon-bofang-copy"></i>
                      <span class="texInfo">最近播放</span>
                    </div>
                    <div class="infoRight">
                      <span>{{num1}}</span>
                      <i class="iconfont icon-houdongfangiconfont24"></i>
                    </div>
                  </div>
                  </router-link>
                  <!-- 我的电台 -->
                  <router-link to="MyFm">
                  <div class="playInfoItem">
                    <div class="infoLeft">
                      <i class="iconfont icon-diantaibaoshe"></i>
                      <span class="texInfo">我的电台</span>
                    </div>
                    <div class="infoRight">
                      <span>0</span>
                      <i class="iconfont icon-houdongfangiconfont24"></i>
                    </div>
                  </div>
                  </router-link>
                  <!-- 我的收藏 -->
                  <router-link to="MyCollection">
                    <div class="playInfoItem">
                      <div class="infoLeft">
                        <i class="iconfont icon-wodeshoucang"></i>
                        <span class="texInfo">我的收藏</span>
                      </div>
                      <div class="infoRight">
                        <span>{{num}}</span>
                        <i class="iconfont icon-houdongfangiconfont24"></i>
                      </div>
                    </div>
                  </router-link>

              </div>
          </div>
      </div>
      <!-- 收藏的歌单 -->
      <div class="titleInfo" ref = "titleInfo">
        <p @click="toggle1=!toggle1"><i class="iconfont icon-xia1"></i>&nbsp;&nbsp;<span>我收藏的歌曲</span><span class="dataNum">{{num}}</span></p>
      </div>
      <!-- 播放列表 -->
      <div class="createPlaylist">
        <div class="PlaylistTitle">

            <div class="playListBox" v-show="toggle1" v-for="item in obj" @click="playMusic(item)">
                <div class="palyListInfo">

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
      </div>
  </div>

  </div>
</template>


<script type="text/javascript">
  import Animate from 'animate.css'
  // import msg from '../assets/eventBus'
  export default {
  data(){
    return{
        toggle:true,toggle1:true,toggle2:false,
        obj:[],
        num:"",
        obj1:[],
        num1:''
    }
  },
    methods:{
      playMusic(){
        this.$router.push({path: '/musicPlayer'})
      },
      scrollFn(){
      console.log(this.$refs.innerWrap.scrollTop);
      var scrollTop = this.$refs.innerWrap.scrollTop;
      if (scrollTop > 295){
        this.$refs.titleInfo.style.position = "fixed";
        this.$refs.titleInfo.style.top = "1rem";
      }else if (scrollTop  == 0){
        this.$refs.titleInfo.style.position = "static";

      }

      }

  },
  mounted(){
    this.obj = JSON.parse(localStorage.getItem('collectioned'));
    console.log(this.obj);
    this.num = this.obj.length;
    this.obj1 = JSON.parse(localStorage.getItem("playedSongs"));
    console.log(this.obj1);
    this.num1 = this.obj1.length

  }

}
</script>


<style lang="css" scoped>
.innerWrap{width: 100%;height: 100%;padding-top: 1rem;overflow: auto;}

/*隐藏头部*/
.titleMoreBox,.more,.hide{width: 100%;}
.moreList{width: 100%;margin: 0 auto; padding-left: 20px;background: #fff;}
.moreList .moreInfo{width: 100%;text-align: left;height: 1rem; border-bottom: 1px solid #ccc}
.moreList .moreInfo span{display: inline-block;line-height: 1rem;}
.moreInfoLeft>i{display: block;}
.titleMoreBox{position: fixed;top: 1.07rem;}
.hide{width: 100%;height: 20rem;background: #333;opacity: .6;}


#myMusic{overflow: auto;height: 100%;font-size: .4rem;position: relative;color:#333;font-weight: 500;}
/*頭部樣式*/
.header{ position: fixed;top: 0;width: 100%;height: 1.07rem;background: #333;color: #f0f0f0;font-weight: 800;}
.header ul {width: 100%;height: 100%;overflow: hidden;}
.header ul li{width: 33%;height: 100%;float: left;line-height: 1.07rem;}
.header ul li:nth-child(2){font-size: .45rem;text-align: center;}
.header ul li:first-child{text-align: left;padding-left: .33rem;}
.header ul li:last-child{text-align: right;padding-right: .33rem;}
.iconfont{font-size: .6rem}
/*頭部播放列表*/
.playBox{width: 100%;}
.PlayList{width: 100%;}
.PlayListInfo{width: 96%;margin: 0 auto;}
.playInfoItem{width: 100%;height: 1rem;}
.infoLeft{float: left;}
.infoRight{float: right;}
.texInfo{padding-left: .5rem}
.playInfoItem span{display: inline-block;}
/*创建歌单*/
.createPlaylist,.PlaylistTitle,.titleInfo{width: 100%;}
.titleInfo{height: .8rem;background: #f0f0f0;position: static;}
.titleInfo p i{font-size: .33rem;}
.titleInfo p{width: 100%;height: 100%;text-align: left;padding: 0 .33rem;line-height: .8rem;}

.palyListInfo{padding:.23rem;}
.palyListInfo{width: 100%;height: 1.6rem;}
.listInfoLeft{width: 17%;float: left;height: 100%;}
.listInfoRight{width: 83%;float: right;;text-align: left;height: 100%;border-bottom: 1px solid #ccc}
.listInfoLeft img{width: 1.2rem;}

.fadeDown-enter-active, .fadeDown-leave-active {
  transition: opacity .3s
}
.fadeDown-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
