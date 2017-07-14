<template lang="html">
	<div id="findMusic">
		<router-view></router-view>
		<ul class="findOption">
			<li v-bind:class="{ active: isActive}" v-on:click="personalized ()">个性推荐</li>
			<li v-bind:class="{ active: isSong}" v-on:click="song ()">歌单</li>
			<li v-bind:class="{ active: isBroadcasting}" v-on:click="broadcasting ()">主播电台</li>
			<li v-bind:class="{ active: isRanking}" v-on:click="ranking ()">排行榜</li>
		</ul>
		
		<div class="findScenario">
			<p class="findType"><span></span>心情/场景</p>
			<ul class="findArtist">
				<li v-for="item in scenario" v-on:click="scene(item.id,item)">
						<router-link to="/songList">
							<p><img :src='item.banner' /></p>
							<p>{{item.name}}</p>
						</router-link>
					</li>
			</ul>
		</div>
		
		<div class="findLonghair">
			<p class="findType"><span></span>艺术家</p>
			<ul class="findArtist">
				<li v-for="item in artist" v-on:click="scene(item.id,item)">
						<p><img :src='item.banner' /></p>
						<p>{{item.name}}</p>
					</li>
			</ul>
		</div>
		<div class="typePlaylist">
			<p class="findType"><span></span>分类歌单</p>
			<ul class="findArtist">
				<li v-for="item in genre">
					<p><img :src='item.banner' /></p>
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>
		<div class="findLanguage">
			<p class="findType"><span></span>语言</p>
			<ul class="findArtist">
				<li v-for="item in language">
					<p><img :src='item.banner' /></p>
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import li from '../assets/eventBus'
	export default {
		name: 'findMusic',
		data() {
			return {
				artist: [],
				isActive: false,
				isSong: false,
				isBroadcasting: false,
				isRanking: false,
				genre: [],
				language: [],
				scenario: [],
				songId: '',
				songAss: []
			}
		},
		mounted: function() {
			this.$http.get('https://douban.fm/j/v2/rec_channels?specific=all').then(function(res) {
				this.artist = res.data.data.channels.artist; //艺术家
				this.genre = res.data.data.channels.genre; //类型
				this.language = res.data.data.channels.language; //语言
				this.scenario = res.data.data.channels.scenario; //心情场景
				console.log(res.data.data.channels.scenario)
			})
		},
		methods: {
			personalized: function() {
				this.isActive = true;
				this.isSong = false;
				this.isRanking = false;
				this.isBroadcasting = false;

			},
			song: function() {
				this.isSong = true;
				this.isRanking = false;
				this.isBroadcasting = false;
				this.isActive = false;

			},
			broadcasting: function() {
				this.isBroadcasting = true;
				this.isActive = false;
				this.isRanking = false;
				this.isSong = false;

			},
			ranking: function() {
				this.isRanking = true;
				this.isSong = false;
				this.isActive = false;
				this.isBroadcasting = false;

			},
			scene: function(id, ass) {
				console.log(id)
				this.songId = id
				this.songAss = ass
				li.$emit("userDefinedEvent", this.songId, this.songAss);
			}
		}
	}
</script>

<style lang="css">
	#findMusic {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	
	.findArtist {
		width: 100%;
	}
	
	.findArtist>li {
		width: 30%;
		height: 4.3rem;
		float: left;
		margin-left: .1rem;
		margin-left: .23rem;
	}
	
	.findArtist li p:first-child img {
		width: 100%;
		height: 100%;
	}
	
	.findArtist li p:last-child {
		width: 100%;
		font-size: .4rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
	}
	
	.findOption {
		width: 100%;
		height: 7%;
	}
	
	.findOption>li {
		width: 25%;
		height: 100%;
		text-align: center;
		float: left;
		font-size: 0.4rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		border-bottom: 1px solid;
	}
	
	.active {
		color: red;
	}
	
	.text-danger {
		color: #000000;
	}
	
	.findType {
		width: 100%;
		line-height: 1rem;
		font-size: .5rem;
		text-indent: .3rem;
	}
	
	.findLonghair {
		width: 100%;
		position: relative;
		height: 31.5rem;
	}
	
	.findType>span {
		width: .18rem;
		height: .4rem;
		text-indent: 0px;
		background: red;
		display: inline-block;
		position: absolute;
		top: .26rem;
		left: 0rem;
	}
	
	.typePlaylist {
		width: 100%;
		position: relative;
		height: 26.8rem;
	}
	
	.findLanguage {
		width: 100%;
		position: relative;
		height: 18.2rem;
	}
	
	.findScenario {
		width: 100%;
		position: relative;
		height: 14rem;
	}
</style>