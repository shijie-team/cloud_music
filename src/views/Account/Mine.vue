<template>
	<div id="mine">
		<AccoHead :msg='title'></AccoHead>
		<div class="info">
			<router-link to="/mycontent">
				<div class="info-pic">
				<i class="iconfont icon-huangguan"></i>
			</div>
			<div class="info-msg">
				<p>{{myname}}</p>
				<i>lv max</i>
			</div>
			<div class="info-sign">
				<i class="iconfont icon-jifen"></i>
				<span>签到</span>
			</div>
			</router-link>
		</div>
		<ul class="msg">
			<li><p>动态</p><span>0</span></li>
			<li><p>关注</p><span>0</span></li>
			<li><p>粉丝</p><span>0</span></li>
			<li><p><i class="iconfont icon-qiandao"></i></p><span>我的资料</span></li>
		</ul>
		<div class="content">
			<div class="mynews">
				<router-link to="/mynews">
					<i class="iconfont icon-pinglun"></i>
					<span>我的消息</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</router-link>
				
			</div>
			<div class="member">
				<li>
					<i class="iconfont icon-icon_huiyuanbiaozhi"></i>
					<span>会员中心</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-shangcheng"></i>
					<span>商城</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-qiandao1"></i>
					<span>在线听歌免流量</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
			</div>
			<div class="seting">
				<li>
					<i class="iconfont icon-set1"></i>
					<span>设置</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-saoyisao"></i>
					<span>扫一扫</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-gexingdingzhipifu"></i>
					<span>个性换肤</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-dengpao"></i>
					<span>夜间模式</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-dingshi"></i>
					<span>定时关闭</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-diantai"></i>
					<span>音乐闹钟</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-jiashizheng"></i>
					<span>驾驶模式</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
			</div>
			<div class="share">
				<li>
					<i class="iconfont icon-fenxiang"></i>
					<span>分享网易云音乐</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
				<li>
					<i class="iconfont icon-guanyu"></i>
					<span>关于</span>
					<i class="iconfont icon-houdongfangiconfont24"></i>
				</li>
			</div>
			<div class="quit" @click='quit'>
				退出登录
			</div>
		</div>
	</div>
</template>

<script>
import AccoHead from '../../components/account/AccountHead'
import Account from '../Account' 
export default {
  name: 'mine',
  components: {
  	AccoHead
  },
  data(){
  	return {
		title:{
			title:'我的资料',
			tt:false,
			myname:''
		}
  	}
  },
  methods:{
	quit(){
		localStorage.setItem('isLogin','false');
		this.$router.push({path:'/account',component:Account});
	}
  },
  beforeMount(){
  	var isLogin = localStorage.getItem('isLogin');
	if(!(isLogin == 'true')){
		this.$router.push({path:'/account',component:Account});
	};
	this.myname=localStorage.getItem('name');
	console.log(this.myname)
  }
}
</script>

<style scoped>
	#mine{font-size: .5rem;background:lightgray;overflow: auto;height: 100%;text-align: center;}
	.iconfont{font-size:.4rem}
	.info{text-align: left;padding:.3rem;background: white;}
	.info>div{display:inline-block;}
	.info>a>div{display:inline-block;}
	.icon-huangguan{font-size: 1.5rem;}
	.info-msg>p{padding-bottom: .1rem;}
	.info-msg>i,{border: 1px solid #BDBDBD;border-radius: 1rem;padding: 0 .2rem}
	.info-sign{border: 1px solid orangered;color:orangered;border-radius: 1rem;padding:.1rem .3rem;float: right;margin-top: .4rem;font-size: .35rem;}
	.icon-jifen{font-size: .4rem;}
	.msg{display: flex;justify-content: space-around;font-size: .32rem;background: white;}
	.msg>li{align-self: center;margin:.2rem 0;border-right:1px solid lightgray;width: 25%;}
	.icon-qiandao{font-size: .35rem;}
	.msg>li>span{font-weight: 800;}
	.msg>li:nth-last-child(1) span{font-weight: 500;}
	.mynews{background: white;height: 1.2rem;line-height: 1.2rem;}
	.content{text-align: left;}
	.content>div{padding-left:.3rem;margin-top: .3rem;background: white;}
	.content>div>li{border-bottom:1px solid lightgray;height: 1rem;line-height: 1rem;margin-left: .7rem;}
	.content>div>li>i{margin-left: -.7rem;}
	.content>div>li>i:nth-last-child(1){display: inline-block;width: .7rem;}
	.icon-houdongfangiconfont24{float: right;font-size: .5rem;color: lightgrey;}
	.quit{text-align: center;height: 1.5rem;line-height: 1.5rem;color: red;}
</style>