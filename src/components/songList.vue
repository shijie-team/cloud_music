<template>
	
<div id="songList" @scroll='Scro()' ref='songList'>
	<div class="songCatalogue">
		<p class="cataP"><img :src="ass.banner"/></p>
		<div class="cataDiv">
			<p>{{ass.intro}}</p>
			<p><img :src="ass.cover"/><span>{{ass.creator.name}}</span></p>
		</div>
		
	</div>
	<div class="fistsong" v-bind:class="{ active: isfistsong}">
			<p class="fistP"><i class="iconfont icon-diantaibaoshe"></i></p>
			<div class="fistDiv">
				<p>播放全部</p>
				<p ><i class="iconfont icon-ranking"></i>多选</p>
			</div>
		</div>
	<ul class="songUl">
		<li class="songMenu clearfix" v-for="item in url.items" >
			<p class="songP"v-on:click="songPlay(item)"><i class="iconfont icon-bofang-copy" ></i></p>
			<div class='clearfix sonDiv'>
				<div class="songName">
					<p>{{item.title}}</p>
					<p>{{item.artist_name}}</p>
				</div>
				<p class="songMore"><i class="iconfont icon-unie644"></i></p>
			</div>
		</li>
	</ul>
</div>

</template>

<script>
import li from '../assets/eventBus'

export default{
	name:'songList',
	data(){
		return {
			msg:"",
			title:"",
			url:[],
			isDisplay:false,
			songArr:"",
			ass:[],
			isfistsong:false
		}
	},
	mounted(){
		//var url;
		var self=this;
		li.$on("userDefinedEvent",function(msg,ass){
			self.msg=msg;
			self.ass=ass
		self.$http.get('https://douban.fm/j/v2/playlist?channel='+(self.msg)+'&kbps=192&client=s%3Amainsite%7Cy%3A3.0&app_name=radio_website&version=100&type=n').then(function(res){
			self.title=res.body.song[0].title;
		self.$http.get('https://douban.fm/j/v2/query/all?q='+(self.title)+'&start=0&limit=all')	.then(function(res){
			self.items=res.body
				for(var i=0 ; i<self.items.length;i++){
					for(var j=0;j<self.items[i].items.length;j++){
						if(self.items[i].items[j].url){
							self.url=self.items[i]
						}
						break;
					}
				}
		})
		})
		});
	},
	methods:{
		Scro:function(event){
			if(this.$refs.songList.scrollTop>=375){
				this.isfistsong=true;
			}else{
				this.isfistsong=false;
			}
		},
		songPlay:function(arr){
			console.log(arr)
//			var aa=this
//			this.songArr=arr;
//			this.set=function(arr){
//			 	console.log(localStorage.setItem(arr))
//			}
//			this.get =function(){
//				return aa.ss=localStorage.getItem(arr)
//			}
			
			//li.$emit("userDefinedEvent",this.songArr);
		}
	}
}
</script>

<style scoped>
#songList{width: 100%;height: 100%;overflow: auto;}
.songCatalogue{width: 100%;height:5rem;border-bottom: .2rem solid lightgray;}
.fistsong{width: 100%;height:1.4rem;font-size: .48rem;}
.fistP{width: 10%;line-height: 1.4rem;text-align: center;float: left;}
.fistDiv{width: 90%;line-height: 1.4rem;border-bottom: .03rem solid lavender;float: right;}
.fistDiv>p:nth-child(2){float:right;width: 20%;line-height: 1.4rem;}
.fistDiv>p:nth-child(1){float: left;width: 80%;text-align: left;}
.fistsong p .iconfont{font-size: .65rem;}
.songMenu{width: 100%;height:1.5rem;font-size: .48rem;overflow: auto;}
.songP{width: 10%;line-height: 1.4rem;text-align: center;float: left;}
.sonDiv{width: 90%;height:1.4rem;border-bottom: .03rem solid lavender;float: left;}
.songName{float: left;width: 90%;text-align: left;}
.songName p:nth-child(1){line-height: 0.7rem;overflow: auto;white-space: nowrap;text-overflow: ellipsis;}
.songName p:nth-child(2){line-height: 0.7rem;font-size: .4rem;color:lightgray;}
.songMore{width: 10%;float:right;line-height: 1.4rem;}
.songP .iconfont{font-size: .65rem;}
.songMore .iconfont{font-size: .65rem;}
.songUl{width: 100%;height: 62%;}
.cataP{width: 40%;float: left;margin-top: .7rem;margin-left: .3rem;margin-right: .3rem;}
.cataDiv{width: 54%;float: left;margin-top:.7rem ;font-size: .7rem;}
.cataDiv p:last-child{width: 100%;margin-top: .2rem;position: relative;}
.cataDiv p:last-child img{border-radius: 50%;position: absolute;top:.1rem;width: .8rem;height: .8rem;}
.cataDiv p:last-child span{display: inline-block;font-size: .4rem;text-indent: .9rem;}
.active{position: fixed;top:0px;width: 100%;height:1.4rem;color:#404040;font-size: .48rem;background: #FFFDEF;}
</style>