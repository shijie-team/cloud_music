<template>
	<div id="setname">
		<div class="head">
			<i class="iconfont icon-shang-copy-copy" @click='goback'></i>
			<span>设置昵称</span>
		</div>
		<div class="setname">
			<i class="iconfont icon-ddcaf"></i>
			<input type="text" placeholder="请输入昵称" v-model='has'/>
		</div>
		<button class="next" @click='next'>开启云音乐</button>
	</div>
</template>

<script>
import MyMusic from '../MyMusic'
export default {
  name:'setname',
  data(){
  	return {
  		has:''
  	}
  },
  methods:{
  	goback(){
		window.history.go(-1);
	},
	//判断重名
  	next(){
  		if(!this.has){
  			alert('取个名字呗');
  			return false;
  		}
  		var arr=JSON.parse(localStorage.getItem('user'));
  		for(var i=0;i<arr.length;i++){
  			if(arr[i].name==this.has){
  				alert('名字已经是别人的啦')
  				return false;
  			}	
  		}
  		//添加昵称
  		var obj1=arr[0];
  		obj1.name=this.has;
  		arr.splice(0,1,obj1);
  		localStorage.setItem('user',JSON.stringify(arr));
  		localStorage.setItem('isLogin','true');
		localStorage.setItem('name',this.has);
  		//成功跳转
  		this.$router.push({path:'/myMusic',component:MyMusic});
  	}
  },
  components:{
  
  }
}
</script>

<style scoped>
	#setname{font-size:.5rem;text-align: center;}
	.head{height:1.5rem;background: red;line-height: 1.5rem;color: white;}
	.iconfont{font-size: .7rem;float: left;margin-left: .2rem;}
	.setname{border-bottom:1px solid darkgray;text-align: left;height: 1rem;line-height: 1rem;margin: 1rem;}
	button{width: 2rem;background: red;border-radius:.5rem;margin-top:1rem ;padding: .1rem;}
	.iconfont{font-size: .5rem;}
	input{outline: none;border:none;margin-bottom: .1rem;font-size: .5rem;}
	button {font-size:.5rem;color: white;}
	.next{width: 80%;padding: .3rem 0;}
</style>