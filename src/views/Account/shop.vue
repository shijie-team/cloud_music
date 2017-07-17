<template>
	<div id="shop">
		<acch :msg='title'></acch>
		<banner :msg='ban'></banner>
	</div>
</template>

<script>
import acch from '../../components/account/AccountHead'
import banner from '../../components/account/banner'
	export default {
		name:'shop',
		components:{
			acch,banner
		},
		data(){
		  	return {
				title:{
					title:'云音乐商城',
					tt:true,
					myname:''
				},
				ban:""
		  	}
		},
		created(){
			this.$http.get('../../../static/json/banner.json').then(function(res){
				console.log(res.body.banners);
				this.ban=res.body.banners;
				
			});
			this.$http.get('../../../static/json/allproducts.json').then(function(res){
				console.log(res);
			})
		}
	}
	
	
</script>

<style scoped>
	
</style>