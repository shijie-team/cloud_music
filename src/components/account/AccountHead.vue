<template>
	<div id="accoHead">
		<i class="iconfont icon-shang-copy-copy" v-show="msg.tt" @click='goback'></i>
		<span>{{msg.title}}</span>
		<router-link to='/musicPlayer'>
			<i class="iconfont icon-dengji"></i>
		</router-link>
	</div>
</template>

<script>
	
	export default{
		name:'accoHead',
		data(){
			return {
			
			}
		},
		props:{
			msg:{}
		},
		methods:{
			goback:function(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped>
	#accoHead{height: 1.5rem;background: darkseagreen;line-height: 1.5rem;text-align: center;color: white;font-size: 0.5rem;}
	.icon-dengji{float:right;width:1.5rem;font-size: .7rem;color: white;}
	#accoHead>span{margin-left: 1rem;}
	.icon-shang-copy-copy{font-size: .7rem;float:left;width:1rem;}
</style>