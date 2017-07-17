<template>
	<div id="childmusic">
		<p class="m-con"><b>歌单</b><span>(1)</span></p>
		<ul class="list">
			<li>
				<div class="pic">
					<i class="iconfont icon-dengji"></i>
				</div>
				<div class="list-name">
					<p>我喜欢的音乐</p>
					<p>0首</p>
				</div>
			</li>
		</ul>
		<p class="m-con"><b>收藏的歌单</b><span>({{songs.length}})</span>	</p>
		<ul class="list">
			<li v-for='item in songs' @click='play'>
				<div class="pic pic1">
					<img :src="item.cover"/>
				</div>
				<div class="songs-name">
					<p>{{item.albumtitle}}</p>
					<p>{{item.artist}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'childmusic',
		data(){
			return {
				songs:''
			}
		},
		mounted(){
			var songs = JSON.parse(localStorage.getItem('collectioned'));
		    if(songs){
		       this.songs = songs;
		    }
		},
		methods:{
			play(){
				localStorage.setItem('singlegong',JSON.stringify(this.songs));
				this.$router.push({path:'/musicPlayer'});
			}
		}
	}
</script>

<style scoped>
	.pic{width:2rem;height: 2rem;background:#333;color: white;text-align: center;}
	.icon-dengji{font-size: 1rem;line-height: 2rem;}
	.list li{padding:.2rem .4rem .1rem .2rem;text-align:left;border-bottom: 1;}
	.list li div{display: inline-block;}
	.m-con{height:.8rem;line-height: .8rem;background: lightgrey;}
	.m-con>span,.m-con>b{float:left;}
	.m-con>b{margin-left: .6rem;}
	.list-name{padding-left: .2rem;border-bottom: 1px solid lightgray;height: 1.65rem;width: 70%;}
	.list-name>p:nth-child(1){font-size: .45rem;}
	.list-name>p:nth-child(2){font-size: .35rem;color:lightslategrey}
	img{width:100%}
	.pic1{background: transparent;}
	.songs-name{vertical-align: top;}
	.songs-name p{height: .6rem;line-height:.6rem;}
	.songs-name p:nth-child(2){color:lightgray}
</style>