<template id="">
  <div  id="musicPlayer">
    <TopBack :title='songsName'></TopBack>
    <div class="wrap">
      <div class="volume clearfix">
        <span>音量:</span>
        <span>0</span>
      </div>
      <div class="flim-img">
        <img src="../assets/image/film.png" alt="" />
        <img src="http://p4.music.126.net/s9tzFvw9wDCuoeuADggCNg==/2535473814806220.jpg?param=200y200" alt="">
      </div>
    </div>
    <audio id="audio" src="">对不起您的浏览器不支持H5，请使用最新版本的浏览器</audio>

    <div class="controls">
      <div class="collection">
          <i class="iconfont icon-aixin"></i>
      </div>
      <div class="range">
        <span>00:00</span>
        <input type="range" name="" id="rangeBar" value="0" />
        <span>00:00</span>
      </div>
      <div class="changeBtns">
          <i class="iconfont icon-xuanzhuan" @click='getCollection'></i>
        <i class="iconfont icon-shangyishou"></i>
        <i class="iconfont icon-bofang-copy"></i>
        <i class="iconfont icon-shangyishou1"></i>
        <i class="iconfont icon-quku"></i>
      </div>
    </div>
    <ul id="menu-items">
    </ul>
  </div>
</template>
<script type="text/javascript">
import TopBack from '../components/TopBack'
export default {
  name:'musicPlayer',
  components:{
    TopBack
  },
  data(){
    return{
      songsName:"super star"
    }
  },
  methods:{
    getCollection(){

    }
  }
}
</script>

<style scoped>
#musicPlayer{position: fixed;width: 100%;height: 100%;z-index: 1999;background: url('../assets/image/bg_snowberg.jpg');background-size: 100% 100%;}
.wrap{width: 100%;height: 80%;position: relative;}
.flim-img{width: 80%;height: 80vw;position: absolute;left: 10%;top:20%;}
.wrap img{width: 100%;height: 100%;position: absolute;left: 0;top: 0;border-radius: 50%;}
.wrap img:last-child{width: 50%;height: 50%;left: 25%;top: 25%;}
.volume{margin-top: 1.33rem /* 100/75 */;font-size: 0.4rem /* 30/75 */;text-align: left;line-height:0.53rem /* 40/75 */}
.volume span{display: block;float: left;width: 50%;height: auto;}
.volume span:first-child{text-align: right;}
.controls{height: 20%;font-size: 0.4rem /* 30/75 */;background: rgba(0,0,0,0.8);color: rgba(255,255,255,0.6);padding: 0.27rem /* 20/75 */}
.range{width: 100%;height:33.33%;display: flex;align-items: center;justify-content: center;}
.range span{font-size: 0.53rem /* 40/75 */;}
.range input{width: 60%;margin: 0.27rem /* 20/75 */}
.changeBtns .iconfont{font-size: 0.8rem /* 60/75 */;}
.changeBtns{width: 100%;height:33.33%;display: flex;justify-content: space-around;align-items: center;}
.collection{height: 33.33%;display: flex;justify-content: center;align-items: center;}
.collection .iconfont{font-size: 0.8rem /* 60/75 */;color: #f00000;}
</style>
