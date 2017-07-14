<template>
	<div id="setname">
		<div class="setname">
			<i class="iconfont icon-ddcaf"></i>
			<input type="text" placeholder="设置昵称" />
		</div>
		<button class="next"><router-link to="/mine">确定</router-link></button>
	</div>
</template>

<script>
export default {
  name: 'setname',
  components: {
  
  }
}
</script>

<style scoped>
	#setname{font-size:.5rem;padding: 1rem;}
	.setname{border-bottom:1px solid darkgray;text-align: left;}
	button{width: 2rem;background: red;border-radius:.5rem;margin-top:1rem ;padding: .1rem;}
	.iconfont{font-size: .5rem;}
	input{outline: none;border:none;margin-bottom: .1rem;font-size: .5rem;}
	button a{font-size:.5rem;color: white;}
</style>