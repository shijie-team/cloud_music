<template>
	<div id="free">
		<acch :msg='title'></acch>
		<b>开通包月,只要9元</b>
	</div>
</template>

<script>
	import acch from '../../components/account/AccountHead'
	export default{
		name :'memeber',
		data(){
			return {
				title:{
					title:'在线听歌免流量',
					tt:true,
					
				}
			}
		},
		components:{
			acch
		}
	}
</script>

<style scoped>
	#free{text-align: center;font-size: .5rem;}
	b{width: 80%;padding: .3rem 0;background: red;color: white;display:inline-block;margin-top: 3rem;border-radius: 1rem; }
</style>