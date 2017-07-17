<template lang="html">
  <div class="singer">
    <div class="playListInfo">
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
}
</script>

<style lang="css" scoped>
.singer{width: 100%;font-size: .4rem;color: #333;}
.playListInfo{margin:.23rem;overflow: hidden;padding-top: .2rem;}
.playListInfo{width: 100%;height: 1.6rem;}
.listInfoLeft{width: 17%;float: left;height: 100%;}
.listInfoRight{width: 83%;float: right;;text-align: left;height: 100%;border-bottom: 1px solid #ccc}
.listInfoLeft img{width: 1.2rem;}
</style>
