<template lang="html">
<div class="recentPlay">


  <div class="header">
      <ul>
        <li @click="goback"><i class="iconfont icon-shang-copy-copy"></i></li>
        <li>最近播放</li>
        <li><i class="iconfont icon-paixingbang"></i></li>
      </ul>
  </div>
  <div class="title">
      <div class="titleInfo">
          <div class="leftInfo">
              <img src="http://www.myputaoyuan.cn/cimg/bd116760854.jpg" alt=""><span>最近播放的歌曲</span>
          </div>
          <div class="rightInfo">
              <span>num</span><i class="iconfont icon-houdongfangiconfont24"></i>
          </div>
      </div>
  </div>
  <div class="txtBox">
      <div class="txtInfo">
          <p>最近播放的歌单/专辑/电台</p>
      </div>
  </div>
  <div class="palyList">
    <div class="palyListInfo">

        <div class="listInfoLeft">
          <img src="http://img2.imgtn.bdimg.com/it/u=544849495,3489965439&fm=214&gp=0.jpg" alt="">
        </div>

        <div class="listInfoRight">
            <p class="listInfoRightTil">我喜欢的音乐</p>
            <span>nun首</span>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    goback(){
      history.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
.recentPlay{width: 100%;font-size: .4rem;}
span{display: inline-block;}
.header{ width: 100%;height: 1.07rem;background: #333;color: #f0f0f0;font-weight: 800;}
.header ul {width: 100%;height: 100%;overflow: hidden;}
.header ul li{width: 33%;height: 100%;float: left;line-height: 1.07rem;}
.header ul li:nth-child(2){font-size: .45rem;}
.header ul li:first-child{text-align: left;padding-left: .33rem;}
.header ul li:last-child{text-align: right;padding-right: .33rem;}
.iconfont{font-size: .6rem}

.title,.titleInfo{width:100%;}
.titleInfo{height: 1.4rem;line-height: 1.4rem;position: relative;}
.leftInfo{width: 50%;float: left;text-align: left;}
.leftInfo img{width: 10%;position: absolute;top: .13rem;left: .13rem}
.leftInfo span{padding-left: 1.33rem;}
.rightInfo{width: 50%;float: right;text-align: right;}

.txtBox{width: 100%;height: .8rem;background: #f0f0f0;line-height: .8rem;}

.palyListInfo{padding:.23rem;}
.palyListInfo{width: 100%;height: 1.6rem;}
.listInfoLeft{width: 17%;float: left;height: 100%;}
.listInfoRight{width: 83%;float: right;;text-align: left;height: 100%;border-bottom: 1px solid #ccc}
.listInfoLeft img{width: 1.2rem;}
</style>
