<template>
	<div id="childmynews">
		<p class="peo">个人信息</p>
		<ul>
			<li>
				<b>等级:</b><i>lv.max</i>
			</li>
			<li>
				<b>性别:</b><span>男</span>
			</li>
			<li>
				<b>地区:</b><span>光谷智慧园</span>
			</li>
		</ul>
		<p class="peo">个人介绍</p>
		<p>沧海一声笑</p>
	</div>
</template>

<script>
	export default {
		name:'childmynews'
	}
</script>

<style scoped>
	#childmynews{text-align: left;padding-top:.3rem;}
	ul{padding-bottom: 1rem;padding-left:.5rem ;}
	p{padding-left:.5rem ;}
	.peo{margin:.3rem 0;font-size: .45rem;font-weight: 600;border-left:.1rem solid red ;}
	
</style>