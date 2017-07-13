<template>
<div id="songList">
	<div class="songCatalogue">
	
	</div>
	<div class="fistsong">
			<p class="fistP"><i class="iconfont icon-diantaibaoshe"></i></p>
			<div class="fistDiv">
				<p>播放全部</p>
				<p><i class="iconfont icon-ranking"></i>多选</p>
			</div>
		</div>
	<ul class="songUl">
		<li class="songMenu clearfix" v-for="item in url.items" v-on:click="songPlay(item)">
			<p class="songP"><i class="iconfont icon-bofang-copy" ></i></p>
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
			songArr:""
		}
	},
	mounted(){
		//var url;
		var self=this;
		li.$on("userDefinedEvent",function(msg){
			self.msg=msg;
		self.$http.get('https://douban.fm/j/v2/playlist?channel='+(self.msg)+'&kbps=192&client=s%3Amainsite%7Cy%3A3.0&app_name=radio_website&version=100&type=n').then(function(res){
			self.title=res.body.song[0].title;
		self.$http.get('https://douban.fm/j/v2/query/all?q='+(self.title)+'&start=0&limit=all')	.then(function(res){
			self.items=res.body
				for(var i=0 ; i<self.items.length;i++){
					for(var j=0;j<self.items[i].items.length;j++){
						if(self.items[i].items[j].url){
							self.url=self.items[i]
							//url=self.url;	
						}
						break;
					}
				}
		})
		})
		});
		this.songPlay=function(arr){
			console.log(arr)
			this.songArr=arr;
			li.$emit("userDefinedEvent",this.songArr);
		}
	},
}
</script>

<style scoped>
#songList{width: 100%;height: 100%;overflow: auto;}
.songCatalogue{width: 100%;height: 30%;background: red;}
.fistsong{width: 100%;height:1.4rem;font-size: .48rem;}
.fistP{width: 10%;line-height: 1.4rem;text-align: center;float: left;}
.fistDiv{width: 90%;line-height: 1.4rem;border-bottom: .03rem solid lavender;float: right;}
.fistDiv>p:nth-child(2){float:right;width: 20%;line-height: 1.4rem;}
.fistDiv>p:nth-child(1){float: left;width: 80%;text-align: left;}
.fistsong p .iconfont{font-size: .65rem;}
.songMenu{width: 100%;height:1.4rem;font-size: .48rem;overflow: auto;}
.songP{width: 10%;line-height: 1.4rem;text-align: center;float: left;}
.sonDiv{width: 90%;height:1.4rem;border-bottom: .03rem solid lavender;float: left;}
.songName{float: left;width: 90%;text-align: left;}
.songName p:nth-child(1){line-height: 0.7rem;overflow: auto;white-space: nowrap;text-overflow: ellipsis;}
.songName p:nth-child(2){line-height: 0.7rem;font-size: .4rem;color:lightgray;}
.songMore{width: 10%;float:right;line-height: 1.4rem;}
.songP .iconfont{font-size: .65rem;}
.songMore .iconfont{font-size: .65rem;}
.songUl{width: 100%;height: 62%;}
</style>