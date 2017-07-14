<template>
	<div id="mycontent"  >
		<div class="head">
			<router-link to='/mine'><i class="iconfont icon-shang-copy-copy"></i></router-link>
			<span v-show="title">是我是我还是我</span>
			<i class="iconfont icon-fenxiang"></i>
			<i class="iconfont icon-dengji"></i>
		</div>
		<div class="content" @scroll='sol' ref='sss'>
			<div class="mypic">
				<div class="pic">
					<i class="iconfont icon-huangguan"></i>
				</div>
				<p class='mypic-name'>是我是我还是我</p>
				<ul>
					<li class='mypic-attent'><span>关注</span><span>0</span></li>
					<li class='mypic-fans'><span>粉丝</span><span>0</span></li>
				</ul>
				<router-link to='/data' class='mypic-edit'>
					<i class="iconfont icon-icon-yxj-edit"></i>
					编辑
				</router-link>
			</div>
			<ul class="mymian">
				<li><router-link to='/mycontent/childmusic'>音乐</router-link></li>
				<li><router-link to='/mycontent/childstate'>动态</router-link></li>
				<li><router-link to='/mycontent/childmynews'>关于我</router-link></li>
			</ul>
			<div class="rou">
				<router-view></router-view>
			</div>
			
		</div>
		
		
	</div>
</template>

<script>
	export default{
		name:'mycontent',
		data(){
			return {
				title:false
				
			}
		},
		methods:{
			goback:function(){
				window.history.go(-1);
			},
			sol:function(event){
				if(this.$refs.sss.scrollTop>300){
					this.title=true
				}else{
					this.title=false
				}
			}
		}
	}
</script>

<style scoped>
	#mycontent{font-size: .4rem;height: 100%;}
	.iconfont{font-size: .7rem;}
	.icon-shang-copy-copy{float:left;width:1rem;color: white;}
	.head{text-align: left;font-size: .6rem;position: fixed;height: 1.5rem;background: black;width:100%;color: white;line-height: 1.5rem;}
	.head>span{font-family: "KaiTi";}
	.icon-huangguan{font-size: 2rem;color: cyan;}
	.content{overflow: auto;height: 100%;}
	.mypic{height: 50%;background: #333;color: white;}
	.pic{padding-top:1.5rem;}
	.mypic-name{font-size: .5rem;font-family: "KaiTi";}
	.mypic>ul{padding:.5rem 0 1rem 0;}
	.mypic>ul>li{display: inline-block;padding:0 .2rem}
	.mypic>ul>li>span{padding: 0 .1rem;}
	.mypic-attent{border-right:1px solid white;}
	.mypic-edit{border:1px solid white;padding: .3rem 1rem;border-radius: 1rem;color:white;}
	.icon-icon-yxj-edit{font-size:.4rem;margin-top: .5rem;}
	.mymian{display: flex;justify-content: space-around;height: 6.5%;}
	.mymian>li{width:33.33%;height:1rem;line-height: 1rem;font-size: .45rem;}
	.mymian>li>a{display: block;}
	.router-link-active{border-bottom: .1rem solid red;color: red;transition: all .3s;}
	.rou{height: 85%;}
	.icon-fenxiang,.icon-dengji{float: right;width: 1rem;font-size: .6rem;}
</style>