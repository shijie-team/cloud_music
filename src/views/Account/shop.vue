<template>
	<div id="shop">
		<acch :msg='title'></acch>
	</div>
</template>

<script>
import acch from '../../components/account/AccountHead'
	export default {
		name:'shop',
		components:{
			acch
		},
		data(){
		  	return {
				title:{
					title:'云音乐商城',
					tt:true,
					myname:''
				}
		  	}
		},
		mounted(){
			this.$http.get('../../../static/json/banner.json').then(function(res){
				console.log(res.body.banners);
			});
			this.$http.get('../../../static/json/allproducts.json').then(function(res){
				console.log(res);
			})
		}
	}
	
	
</script>

<style scoped>
	
</style>