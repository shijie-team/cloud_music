<template>
	<div id="register">
		<div class="head">
			<i class="iconfont icon-shang-copy-copy" @click='goback'></i>
			<span>手机号注册</span>
		</div>
		<div class="content">
			<form>
				<div class="username">
					<i class="iconfont icon-qiandao1"></i>
				<span>+86</span>
				<input type="text" placeholder="请输入手机号" v-model='iphone' @blur='num'/>
				</div>
				<div class="password">
					<i class="iconfont icon-ddcaf"></i>
					<input type="text" placeholder="设置登录密码,不能少于6位" v-model='password' @blur='word'/>
				</div>
			</form>
			<p class="next" @click='next'>下一步</p>
		</div>
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
	import Setname from './Setname'
export default {
  name: 'register',
  data(){
  	return {
  		iphone:'',
  		password:'',
  		isknow:false,
  		ispassword:false
  	}
  },
  components: {
  
  },
  methods:{
	goback(){
		window.history.go(-1);
	},
	num(){
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.iphone))){ 
	        alert("手机号码有误，请重填");  
    	}else{
    		this.isknow=true;
    	}
	},
	word(){
		if(/^.{6,}$/.test(this.password)){
			this.ispassword=true;
		}else{
			this.ispassword=false;
		}
	},
	next(){
		if(this.isknow && this.ispassword){
			var obj1={username:this.iphone,password:this.password};
			var arr = JSON.parse(localStorage.getItem('user'));
			if(!arr){
				var arr=[];
			}
			arr.unshift(obj1);
			localStorage.setItem('user',JSON.stringify(arr));
			console.log(JSON.parse(localStorage.getItem('user')),arr);
			this.$router.push({path:'/setname',component:Setname});
		}else{
			alert('请正确输入');
		}
	}
  }
}
</script>

<style scoped>
#register{font-size: .5rem;text-align: center}
input{outline: none;border:none;margin-bottom: .1rem;}
.head{height:1.5rem;background: red;line-height: 1.5rem;color: white;}
.iconfont{font-size: .7rem;float: left;margin-left: .2rem;}
.content .iconfont{font-size: .4rem;}
.content{padding:.6rem .6rem 0 .6rem;}
form{text-align: left;}
form input{font-size: .5rem;margin-left: .2rem;}
.username>span{padding-left: .2rem;}
form>div{border-bottom:1px solid black;padding-top: .3rem;}
.next{background: red;height:1rem;line-height: 1rem;border-radius: 1rem;margin-bottom:.5rem;margin-top:1rem ;}
.next>a{color: white;}
.kong{padding-top:50%;}
.otherway{height: 1.6rem;display: flex;justify-content: space-around;font-size: .3rem;color: #bdbdbd;}
.other-c{padding: 0 .2rem;}
.otherway>li{width: 1.3rem;}
.otherway>li>div{width: 1.1rem; height: 1.1rem;background-image: url(../../assets/img/iconstype_wap.png) ;background-color: #0288d1;border-radius: 50%;margin:auto;background-size: auto 1rem;}
.weix{background-position:-.15rem 0rem;}
.qq{background-position:1.2rem 0;}
.weib{background-position:2.7rem 0;}
.wangyi{background-position:3.9rem 0;}
.otherway>li>p{height:.3rem;}
legend{padding: 0 5px;}
fieldset{border: 0;border-top:1px solid #bdbdbd;color: #bdbdbd;font-size: .35rem;margin: 0 1rem;padding-bottom: .6rem;}
</style>