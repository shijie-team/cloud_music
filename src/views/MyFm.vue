<template lang="html">
<div class="myFm">
    <div class="header">
        <ul>
          <li @click="goback"><i class="iconfont icon-shang-copy-copy"></i></li>
          <li>我的电台</li>
          <li><i class="iconfont icon-paixingbang"></i></li>
        </ul>
    </div>

    <div class="dingyue">
        <div class="dingyueBox">

              <div class="info">
                <p>暂无订阅</p><p>可订阅喜欢的电台在这里</p>
              </div>
        </div>
    </div>
    <div class="tuijian">
        <div class="tuijianTile">
              <h4>热门电台推荐</h4>
        </div>
        <div class="tuijianInfo">
            <div class="infoItem">
              <div class="infoImg">
                  <img src="" alt="">
                   <span>温柔干净的女声</span>
              </div>

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
  methods:{
    goback(){
      history.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
.myFm{width: 100%;font-size: .4rem;color: #333;}

.header{ width: 100%;height: 1.07rem;background: #333;color: #f0f0f0;font-weight: 800;}
.header ul {width: 100%;height: 100%;overflow: hidden;}
.header ul li{width: 33%;height: 100%;float: left;line-height: 1.07rem;}
.header ul li:nth-child(2){font-size: .45rem;}
.header ul li:first-child{text-align: left;padding-left: .33rem;}
.header ul li:last-child{text-align: right;padding-right: .33rem;}
.iconfont{font-size: .6rem}

.dingyue{width: 100%;height: 5rem;background: #fff;;border-bottom: .33rem solid #f0f0f0;;}
.dingyueBox{width: 100%;height: 100%;position: relative;}
.info{position: absolute;bottom: .13rem;left: 3.07rem}
.info p:first-child{font-size: .53rem;color: #999;}
.info p:last-child{color: #666;}
</style>
