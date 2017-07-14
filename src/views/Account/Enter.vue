<template>
	<div id="enter">
		<div class="head">
			<i class="iconfont icon-shang-copy-copy" @click='goback'></i>
			<span>手机号注册</span>
		</div>
		<div class="content">
			<form>
				<div class="username">
					<i class="iconfont icon-qiandao1"></i>
				<span>+86</span>
				<input type="text" placeholder="请输入手机号" />
				</div>
				<div class="password">
					<i class="iconfont icon-ddcaf"></i>
					<input type="text" placeholder="请输入密码" />
				</div>
			</form>
			<p class="next"><router-link to="/mymusic">下一步</router-link></p>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name:'enter'
	}
</script>

<style>
#enter{font-size: .5rem;}
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
</style>