<template>
  <div id="app">

    <div class="wrap">
        <router-view></router-view>
        <ul class="footer">
          <li><router-link to="/findMusic">发现音乐<i class="iconfont icon-diantaibaoshe"></i></router-link></li>
          <li><router-link to="/myMusic">我的音乐<i class="iconfont icon-mianxingtubiaoyinle"></i></router-link></li>
          <li><router-link to="/news">音乐资讯<i class="iconfont icon-pengyou"></i></router-link></li>
          <li><router-link to="/account">账号<i class="iconfont icon-wode"></i></router-link></li>
        </ul>
    </div>

  </div>
</template>

<script src="./assets/js/index.js"></script>
<style scoped>
@import "./assets/css/reset.css";
@import "./assets/css/index.css";
/*@import "./assets/css/iconfont.css";*/
.router-view{width: 100%;height: 90%;}
</style>
