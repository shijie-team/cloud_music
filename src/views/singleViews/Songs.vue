<template lang="html">
    <div class="songsWrap">
          <div class="songsTitle">
              <ul class="titleInfo">
                <li class="titleInfoLeft"><i class="iconfont icon-bofang-copy"></i> &nbsp;<span>播放全部</span></li>
                <li class="titleInfoRight"><i class="iconfont icon-set1"></i> <span>管理</span></li>
              </ul>
          </div>
          <div class="songsNameWrap">
            <div class="songsNameInfo">
              <div class="leftInfo">
                  <h4>songs name</h4>
                  <p><i class="iconfont icon-FM"></i>  specialName</p>
              </div>
              <div class="rightInfo">
                <i class="iconfont icon-bofang-copy"></i>
                <i class="iconfont icon-unie644"></i>
              </div>
            </div>
            <div class="songsNameInfo">
              <div class="leftInfo">
                  <h4>songs name</h4>
                  <p><i class="iconfont icon-FM"></i>  specialName</p>
              </div>
              <div class="rightInfo">
                <i class="iconfont icon-bofang-copy"></i>
                <i class="iconfont icon-unie644"></i>
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
.songsWrap{font-size: .45rem;color: #333;}
.songsTitle{height: 1rem;border-bottom: .01rem solid #ccc;}
.iconfont{font-size: .5rem;overflow: hidden;padding-top: .37rem;}
.titleInfo{line-height: 1rem;height: 1rem;}
.titleInfo li span{display: inline-block;}
.songsWrap,.songsTitle,.titleInfo,.songsNameWrap,.songsNameInfo{width: 100%;}
.titleInfoLeft{width: 50%;float: left;text-align: left; padding-left: .27rem;}
.titleInfoRight{width: 50%;float: right;text-align: right;padding-right: .27rem;}

.songsNameWrap,.songsNameInfo{height: 1.5rem;}
.songsNameInfo{border-bottom: .01rem solid #ccc;}
.songsNameInfo div{line-height: .7rem;}
.leftInfo{width: 50%;float: left; text-align: left;padding-left: .4rem;}
.rightInfo{width: 50%;float: right;text-align: right;padding-right: .4rem;}
.rightInfo i{display: inline-block;line-height: .6rem;padding-right: .2rem;}
</style>
