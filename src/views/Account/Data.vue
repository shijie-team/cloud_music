<template>
	<div id="data">
		<accohead :msg='title'></accohead>
		<div class="content">
			<div class="c-news">
				<li>
					<span>头像</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>个人主页背景</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>昵称</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>性别</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>二维码</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>生日</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>	
			</div>
			<div class="c-news">
				<li>
					<span>生日</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>地区</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<span>大学</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
			</div>
			<div class="c-intro">
				<li>介绍</li>
				<textarea name="" rows="10" cols="40" placeholder="个人介绍..."></textarea>
			</div>
		</div>
	</div>
</template>

<script>
	import accohead from '../../components/account/AccountHead'
	export default{
		name:'data',
		data(){
			return {
				title:{
					title:'我的资料',
					tt:true
				}
			}
		},
		components:{
			accohead
		}
	}
</script>

<style scoped>
	#data{font-size: .5rem;background: lightgray;overflow: auto;height: 100%;}
	.iconfont{font-size:.4rem}
	.content{text-align: left;}
	.content>div{padding-left:.3rem;margin-top: .3rem;background: white;}
	.content>div>li{border-bottom:1px solid lightgray;height: 1.5remrem;line-height: 1.5rem;}
	.content>div>li>i:nth-last-child(1){display: inline-block;width: .7rem;}
	.icon-houdongfangiconfont24{float: right;font-size: .5rem;color: lightgrey;}
	body .c-intro{margin-top: .8rem;}
	textarea{font-size: .4rem;width: 100%;}
</style>