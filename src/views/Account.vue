<template>
  <div id="account">
    <div class="logo">
    	<img src="../assets/img/S9Z5$TZP%{$TD8W_QZVJ5$5.png"></img>
    </div>
    <div class="register">
    	<p><router-link to="/enter">手机号登录</router-link></p>
    	<p><router-link to="/register">注册</router-link></p>
    </div>
    <a href="" class="temp">游客试用</a>
    <div class="kong"></div>
    <fieldset class="other">
      <legend  class="other-c">其他方式登录</legend>
    </fieldset>
    <ul class="otherway">
    	<li><div class="weix"></div><p>QQ</p></li>
    	<li><div class="qq"></div><p>微信</p></li>
    	<li><div class="weib"></div><p>支付宝</p></li>
    	<li><div class="wangyi"></div><p>新浪微博</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'account',
  components: {
  
  }
}
</script>

<style scoped>
#account{margin: 0 10%;font-size: 0.4rem;text-align: center;}
.logo{padding-top:20%;margin: 1.5rem 0;}
.logo>img{width: 2rem;}
.temp{border-bottom: 1px solid #bdbdbd;padding-bottom: .1rem;color: #bdbdbd;}
.register>p{border: 1px solid red;height:1rem;line-height: 1rem;border-radius: 1rem;margin-bottom:.5rem;}
legend{padding: 0 5px;}
fieldset{border: 0;border-top:1px solid #bdbdbd;color: #bdbdbd;font-size: .35rem;margin: 0 1rem;padding-bottom: .6rem;}
.kong{padding-top:30%;}
.otherway{height: 1.6rem;display: flex;justify-content: space-between;font-size: .3rem;color: #bdbdbd;}
.other-c{padding: 0 .2rem;}
.otherway>li{width: 1.3rem;}
.otherway>li>div{width: 1.1rem; height: 1.1rem;background-image: url(../assets/img/iconstype_wap.png) ;background-color: #0288d1;border-radius: 50%;margin:auto;background-size: auto 1rem;}
.weix{background-position:-.15rem 0rem;}
.qq{background-position:1.2rem 0;}
.weib{background-position:2.7rem 0;}
.wangyi{background-position:3.9rem 0;}
.otherway>li>p{height:.3rem;}
</style>

