<template lang="html">
  <div class="program">
      <Search></Search>
      <div class="programTitle">
          <ul class="titleInfo">
              <li class="titleInfoLeft"><span>1期节目，</span><span>共6.2M</span></li>
              <li class="titleInfoRight"><i class="iconfont icon-set1"></i> <span>管理</span></li>
          </ul>
      </div>

      <div class="programListInfo">
        <div class="listInfoLeft">
          <img src="http://img2.imgtn.bdimg.com/it/u=544849495,3489965439&fm=214&gp=0.jpg" alt="">
        </div>

        <div class="listInfoRight">
          <p class="listInfoRightTil">program name</p>
          <span>numM，</span><span>program</span>
        </div>
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
.program{color: #333;font-size: .4rem;}
.iconfont{font-size: .4rem}
.program,.programTitle,.titleInfo{width: 100%;}
.titleInfo{height: 1.4rem;border-bottom: .01rem solid #ccc;line-height: 1.4rem;background: #fff;}
.titleInfoLeft span{display: inline-block;font-weight: 600;}
.titleInfoLeft{width: 50%;float: left;text-align: left;padding-left: .27rem;}
.titleInfoRight{width: 50%;float: right;;text-align: right;padding-right: .27rem;}
.programTitle{background: #fff;border-bottom: .03rem solid #ccc;}
.programListInfo{margin:.23rem;overflow: hidden;padding-top: .2rem;}
.programListInfo{width: 100%;height: 1.6rem;}
.listInfoLeft{width: 17%;float: left;height: 100%;}
.listInfoRight{width: 83%;float: right;;text-align: left;height: 100%;border-bottom: 1px solid #ccc}
.listInfoLeft img{width: 1.2rem;}
</style>
