<template>

	<div id="songList" @scroll='Scro()' ref='songList'>
		<div class="songCatalogue">
			<p class="cataP"><img :src="ass.banner" /></p>
			<div class="cataDiv">
				<p>{{ass.intro}}</p>
				<p><img :src="ass.cover" /><span>瑶瑶音乐台(FM110)</span></p>
			</div>

		</div>
		<div class="fistsong" v-bind:class="{ active: isfistsong}">
			<p class="fistP"><i class="iconfont icon-diantaibaoshe"></i></p>
			<div class="fistDiv">
				<p @click="backAll">播放全部</p>
				<p><i class="iconfont icon-ranking"></i>多选</p>
			</div>

		</div>
		<ul class="songUl">
			<li class="songMenu clearfix" v-for="item in url.items">
				<p class="songP" v-on:click="songPlay(item)"><i class="iconfont icon-bofang-copy"></i></p>
				<div class='clearfix sonDiv'>
					<div class="songName">
						<p>{{item.title}}</p>
						<p>{{item.artist_name}}</p>
					</div>
					<p class="songMore" @click="more(item)"><i class="iconfont icon-unie644"></i></p>
				</div>
			</li>
			<div class="songCollect" v-bind:class="{collect:isCollect}">
				<ul>
					<li>歌曲:{{name}}</li>
					<li>
						<p><i class="iconfont icon-shangyishou1"></i></p>
						<p>下一首播放</p>
					</li>
					<li class="clearfix">
						<p><i class="iconfont icon-jia"></i></p>
						<p @click="sonCollect">收藏到歌单</p>
					</li>
					<li>
						<p><i class="iconfont icon-xia"></i></p>
						<p>下载</p>
					</li>
					<li>
						<p><i class="iconfont icon-pinglun"></i></p>
						<p>评论</p>
					</li>
					<li>
						<p><i class="iconfont icon-fenxiang"></i></p>
						<p>分享</p>
					</li>
				</ul>
			</div>
			<div class="songCoverage" v-show="isShow" @click="songCoverage">

			</div>
		</ul>
	</div>

</template>

<script>
	import li from '../assets/eventBus'

	export default {
		name: 'songList',
		data() {
			return {
				msg: "",
				title: "",
				url: [],
				isDisplay: false,
				songArr: "",
				ass: {},
				isfistsong: false,
				name: "",
				isCollect: false,
				isShow: false,
				item: [],
				obj: []
			}
		},
		beforeCreate() {
			var self = this;
			li.$on("userDefinedEvent", function(msg, ass) {
				self.msg = msg;
				self.ass = ass;
				self.$http.get('https://douban.fm/j/v2/playlist?channel=' + (self.msg) + '&kbps=192&client=s%3Amainsite%7Cy%3A3.0&app_name=radio_website&version=100&type=n').then(function(res) {
					self.title = res.body.song[0].title;
					self.$http.get('https://douban.fm/j/v2/query/all?q=' + (self.title) + '&start=0&limit=all').then(function(res) {
						self.items = res.body
						for(var i = 0; i < self.items.length; i++) {
							for(var j = 0; j < self.items[i].items.length; j++) {
								if(self.items[i].items[j].url) {
									self.url = self.items[i]
								}
								break;
							}
						}
					})
				})
			});
		},
		methods: {

			Scro: function(event) {
				if(this.$refs.songList.scrollTop >= 375) {
					this.isfistsong = true;
				} else {
					this.isfistsong = false;
				}
			},
			songPlay: function(arr) {
				var columnInfoList = [];
				columnInfoList.push(arr);
				localStorage.setItem('columnInfoList', JSON.stringify(columnInfoList));
			},
			more: function(item) {
				this.item = item;
				this.name = item.title;
				this.isCollect = true;
				this.isShow = true;
			},
			songCoverage: function() {
				this.isCollect = false;
				this.isShow = false;
			},
			sonCollect: function() {
				this.obj = JSON.parse(localStorage.getItem('collectioned'));
				if(this.obj) {
					for(var i = 0; i < this.obj.length; i++) {
						if(this.obj[i].aid === this.item.aid) {
							this.obj.splice(i,1)
						}
					}
				} else {
					this.obj = [];
				}
				this.obj.push(this.item)
				localStorage.setItem('collectioned',JSON.stringify(this.obj))
        console.log(this.obj);
			},
			backAll:function(){
				localStorage.setItem('columnInfoList',JSON.stringify(this.url.items))
			}
		}
	}
</script>

<style scoped>
	#songList {
		width: 100%;
		height: 100%;
		overflow: auto;
		position: relative;
	}

	.songCatalogue {
		width: 100%;
		height: 5rem;
		border-bottom: .2rem solid lightgray;
	}

	.fistsong {
		width: 100%;
		height: 1.4rem;
		font-size: .48rem;
	}

	.fistP {
		width: 10%;
		line-height: 1.4rem;
		text-align: center;
		float: left;
	}

	.fistDiv {
		width: 90%;
		line-height: 1.4rem;
		border-bottom: .03rem solid lavender;
		float: right;
	}

	.fistDiv>p:nth-child(2) {
		float: right;
		width: 20%;
		line-height: 1.4rem;
	}

	.fistDiv>p:nth-child(1) {
		float: left;
		width: 80%;
		text-align: left;
	}

	.fistsong p .iconfont {
		font-size: .65rem;
	}

	.songMenu {
		width: 100%;
		height: 1.5rem;
		font-size: .48rem;
		overflow: auto;
	}

	.songP {
		width: 10%;
		line-height: 1.4rem;
		text-align: center;
		float: left;
	}

	.sonDiv {
		width: 90%;
		height: 1.4rem;
		border-bottom: .03rem solid lavender;
		float: left;
	}

	.songName {
		float: left;
		width: 90%;
		text-align: left;
	}

	.songName p:nth-child(1) {
		line-height: 0.7rem;
		overflow: auto;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.songName p:nth-child(2) {
		line-height: 0.7rem;
		font-size: .4rem;
		color: lightgray;
	}

	.songMore {
		width: 10%;
		float: right;
		line-height: 1.4rem;
	}

	.songP .iconfont {
		font-size: .65rem;
	}

	.songMore .iconfont {
		font-size: .65rem;
	}

	.songUl {
		width: 100%;
		height: 62%;
	}

	.cataP {
		width: 40%;
		float: left;
		margin-top: .7rem;
		margin-left: .3rem;
		margin-right: .3rem;
	}

	.cataDiv {
		width: 54%;
		float: left;
		margin-top: .7rem;
		font-size: .7rem;
	}

	.cataDiv p:last-child {
		width: 100%;
		margin-top: .2rem;
		position: relative;
	}

	.cataDiv p:last-child img {
		border-radius: 50%;
		position: absolute;
		top: .1rem;
		width: .8rem;
		height: .8rem;
	}

	.cataDiv p:last-child span {
		display: inline-block;
		font-size: .4rem;
		text-indent: .9rem;
	}

	.active {
		position: fixed;
		top: 0px;
		width: 100%;
		height: 1.4rem;
		color: #404040;
		font-size: .48rem;
		background: #FFFDEF;
	}

	.songCollect {
		width: 100%;
		position: fixed;
		height: 67%;
		background: #FFFFFf;
		z-index: 1;
		top: 6rem;
		display: none;
	}

	.songCollect>ul>li {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
	}

	.songCollect li:first-child {
		border-bottom: .02rem solid lavender;
		font-size: .4rem;
	}

	.songCollect>ul>li>p:first-child {
		float: left;
		width: 10%;
		height: 1.2rem;
		text-align: center;
	}

	.songCollect ul li p:last-child {
		float: left;
		width: 90%;
		border-bottom: .02rem solid lavender;
		font-size: .5rem;
	}

	.songCollect>ul>li>p:first-child .iconfont {
		font-size: .65rem;
	}

	.collect {
		display: block;
	}

	.songCoverage {
		width: 100%;
		height: 27%;
		background: rgba(52, 52, 52, .5);
		position: absolute;
		top: 0rem;
	}
</style>
