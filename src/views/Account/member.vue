<template>
	<div id="member">
		<acch :msg='title'></acch>
		<b>立即开通</b>
	</div>
</template>

<script>
	import acch from '../../components/account/AccountHead'
	export default{
		name :'memeber',
		data(){
			return {
				title:{
					title:'会员中心',
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
	#member{text-align: center;font-size: .5rem;}
	b{width: 80%;padding: .3rem 0;background: red;color: white;display:inline-block;margin-top: 3rem;border-radius: 1rem; }
</style>