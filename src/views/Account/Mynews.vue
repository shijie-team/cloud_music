<template>
	<div id="mynews">
		<AccoHead :msg='title'></AccoHead>
		<ul class="msg">
			<li>私信</li>
			<li>评论</li>
			<li>@我</li>
			<li>通知</li>
		</ul>
	</div>
</template>

<script>
	import AccoHead from '../../components/account/AccountHead'
	export default {
		name:'mynews',
		components:{
			AccoHead
		},
		data(){
		  	return {
				title:{
					title:'我的消息',
					tt:true
				}
		  	}
		}
	}
	
</script>

<style scoped>
	#mynews{font-size: .5rem; text-align: center;}
	.msg{display: flex;justify-content: space-around;border:1px solid lightslategray;margin-top: .6rem;border-radius: 1rem;}
	.msg>li{height: 1rem;line-height: 1rem;width:25%}
</style>