<template lang="html">
    <div class="localMusicWrap">
      <div class="localHeader">
          <ul class="headerList">
            <li><i class="iconfont icon-shang-copy-copy"></i></li>
              <li class="infoList">
                    <ul class="localHeaderList">
                      <router-link to="/localMusic/single"><li>单曲</li></router-link>
                      <router-link to="/localMusic/program"><li>节目</li></router-link>
                      <router-link to="/localMusic/mv"><li>MV</li></router-link>
                    </ul>
              </li>
            <li><i class="iconfont icon-paixingbang"></i></li>
          </ul>
      </div>
      <router-view></router-view>
      </div>

    </div>
</template>

<script>
export default {
  methods:{

  }
}

</script>

<style lang="css" scoped>
.localHeaderList .router-link-active li{color:rgb(71, 77, 47);background: #fff;}
.localMusicWrap{width: 100%;height: auto;overflow: hidden;color: #f0f0f0;}
.localHeader{width: 100%;height: 1.07rem;background: #333;}
.headerList{width: 100%;height: 100%;}
.iconfont{font-size: .53rem;}/* iconfont */
.headerList>li:last-child{float:right;padding-right: .4rem;}
.infoList{margin-left: 2rem;width: 5rem;height: 1.07rem;font-size: .4rem;line-height:1.07rem;}
.localHeader,.localHeader ul{width: 100%;}
.localHeader>ul>li{float:left;line-height: .9rem;}
.localHeaderList{width: 100%;height:.9rem;margin-top:.1rem;border: 1px solid #c0c0c0;border-radius: .67rem;}
.localHeaderList li{color: #c0c0c0;font-weight: 500;width: 33.333%;float: left;line-height: .9rem;border-radius: .67rem;}
</style>
