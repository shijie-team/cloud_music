<template lang="html">
	<div id="findMusic"  @scroll='Scr()' ref='assr' >
		<!--<router-view></router-view>-->
		<div class="arr">
		<div class="seek">
			<p><i class="iconfont icon-maikefeng"></i></p>
			<p><router-link to="/hunt"><input type="text" placeholder="搜索音乐" />
				<span class="icoi"><i class="iconfont icon-sousuo"></i></span>
				</router-link>
			</p>
			<p><i class="iconfont icon-paixingbang"></i></p>
		</div>
		<ul class="findOption">
			<li v-bind:class="{ active: isActive}" v-on:click="personalized ()">个性推荐</li>
			<li v-bind:class="{ active: isSong}" v-on:click="song ()">歌单</li>
			<li v-bind:class="{ active: isBroadcasting}" v-on:click="broadcasting ()">主播电台</li>
			<li v-bind:class="{ active: isRanking}" v-on:click="ranking ()">排行榜</li>
		</ul>
		</div>
		<div class="ass"  >
			<div class="findPersonalized"  ref="findsong">
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
						<li v-for="item in artist" v-on:click="scen(item)">
							<router-link to="/songList">
							<p><img :src='item.banner' /></p>
							<p>{{item.name}}</p>
							</router-link>
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
			<div class="findSingle" ref="findHost">
				<div class="boutique">
					<p class="boutiqueP"><img :src="boutiqueBanner.cover" /></p>
					<div class="boutiqueDiv">
						<p class="boutiqueI"><i class="iconfont icon-huangguan"></i>&nbsp;&nbsp;精品歌单&nbsp;></p>
						<p>{{boutiqueBanner.title}}</p>
						<p>感受"采样"独特的奥妙和魅力</p>
					</div>
				</div>
				<div class="findScreen">
					<p>{{vname}}</p>
					<ul class="screenUl">
						<li v-for="item in name" @click="chinese(item)">{{item}}</li>

					</ul>
				</div>
				<ul class="findPopular">
					<li v-for="item in fashionSong.items" @click="fashPlay(item)">
						<p><img :src="item.cover" /></p>
						<p>{{item.title}}</p>
					</li>

				</ul>
			</div>
			<div class="findBroadcasting" ref="findStation">
				<ul class="broadcasUl">
					<li @click="stationClassify"><i class="iconfont icon-leimupinleifenleileibie2"></i>电台分类</li>
					<li @click="stationSisters"><i class="iconfont icon-ranking"></i>电台排行</li>
				</ul>
				<ul class="findArtist">
					<li v-for="item in fashionSong.items">
						<p><img :src='item.cover' /></p>
						<p>{{item.title}}</p>
					</li>
				</ul>
			</div>
			<div class="songRanking" ref="songRanking">
				<ul class="songRankingUl">
					<li v-for="item in fashionSong.items">
						<p class="songRankingP"><img :src='item.cover' /></p>
						<div class="songRankingDiv">
							<p>{{item.title}}</p>
							<p>{{item.album_title}}</p>
							<p>{{item.artist}}</p>
						</div>
					</li>
				</ul>
			</div>
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
				isActive: true,
				isSong: false,
				isBroadcasting: false,
				isRanking: false,
				genre: [],
				language: [],
				scenario: [],
				songId: '',
				songAss: [],
				boutiqueBanner: "",
				fashion: [],
				fashionSong: [],
				name: ['华语', '民谣', '电子'],
				columnInfoList: [],
				vname: '华语',
				novel: []
			}
		},
		mounted: function() {
			this.$http.get('https://douban.fm/j/v2/rec_channels?specific=all').then(function(res) {
				this.artist = res.data.data.channels.artist; //艺术家
				this.genre = res.data.data.channels.genre; //类型
				this.language = res.data.data.channels.language; //语言
				this.scenario = res.data.data.channels.scenario; //心情场景
			});
			this.$http.get('https://douban.fm/j/v2/query/all?q=' + 'Hip-Hop' + '&start=0&limit=all').then(function(res) {
				this.boutiqueBanner = res.body[1].items[0]
			});
			this.$http.get('https://douban.fm/j/v2/query/all?q=' + '流行' + '&start=0&limit=all').then(function(res) {
				this.fashion = res.body
				this.common(this.fashion)
			});
		},
		methods: {
			packaging: function(designation) {
				this.$http.get('https://douban.fm/j/v2/query/all?q=' + designation + '&start=0&limit=all').then(function(res) {
					this.common(res.body)
				})
			},
			Scr:function(event){
				this.$refs.findsong.style.display = 'block';
				this.$refs.findHost.style.display = 'block';
				this.$refs.findStation.style.display = "block";
				this.$refs.songRanking.style.display = "block";
				if(this.$refs.assr.scrollLeft <= 300){
					this.$refs.assr.scrollLeft=0
				} 
				
				if(this.$refs.assr.scrollLeft >= 800){
					this.$refs.assr.scrollLeft=750
					this.$refs.assr.scrollLeft=1500
				}
			},
			common: function(pan) {
				for(var i = 0; i < pan.length; i++) {
					for(var j = 0; j < pan[i].items.length; j++) {
						if(pan[i].items[j].url) {
							this.fashionSong = pan[i]
						}
						break;
					}
				}
			},
			personalized: function() {
				this.isActive = true;
				this.isSong = false;
				this.isRanking = false;
				this.isBroadcasting = false;
				this.$refs.findsong.style.display = 'block';
				this.$refs.findHost.style.display = 'none';
				this.$refs.findStation.style.display = "none";
				this.$refs.songRanking.style.display = "none";
			},
			song: function() {
				this.isSong = true;
				this.isRanking = false;
				this.isBroadcasting = false;
				this.isActive = false;
				this.$refs.findStation.style.display = "none";
				this.$refs.songRanking.style.display = "none";
				this.$refs.findsong.style.display = 'none';
				this.$refs.findHost.style.display = 'block';
			},
			broadcasting: function() {
				this.isBroadcasting = true;
				this.isActive = false;
				this.isRanking = false;
				this.isSong = false;
				this.$refs.findHost.style.display = 'none';
				this.$refs.findsong.style.display = 'none';
				this.$refs.findStation.style.display = "block"
				this.$refs.songRanking.style.display = "none";
				this.packaging("小说")
			},
			ranking: function() {
				this.isRanking = true;
				this.isSong = false;
				this.isActive = false;
				this.isBroadcasting = false;
				this.$refs.findHost.style.display = 'none'
				this.$refs.findsong.style.display = 'none'
				this.$refs.findStation.style.display = "none"
				this.$refs.songRanking.style.display = "block"
				this.packaging("江南")
			},
			scene: function(id, ass) {
				this.songId = id
				this.songAss = ass
				li.$emit("userDefinedEvent", this.songId, this.songAss);
			},
			scen:function(item){
				li.$emit("userDefined", item);
			},
			chinese: function(aa) {
				this.vname = aa
				this.packaging(aa)
			},
			fashPlay: function(item) {
				this.columnInfoList = JSON.parse(localStorage.getItem('columnInfoList'));
				if(this.columnInfoList) {
					for(var i = 0; i < this.columnInfoList.length; i++) {
						if(this.columnInfoList[i].aid === item.aid) {
							this.columnInfoList.splice(i, 1)
						}
					}
				} else {
					this.columnInfoList = []
				}
				this.columnInfoList.push(item)
				localStorage.setItem('columnInfoList', JSON.stringify(this.columnInfoList))
			},
			stationClassify: function() {
				this.packaging("小说")
			},
			stationSisters: function() {
				this.packaging("茉莉")
			}
		}
	}
</script>

<style lang="css">
	#findMusic {
		width: 100%;
		height: 100%;
		overflow: auto;
		padding-top: 2.5rem;
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
		height: 1rem;
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
	
	.findPersonalized {
		width: 10rem;
		height: 100%;
		overflow: auto;
		float: left;
	}
	
	.findSingle {
		width: 10rem;
		height: 100%;
		overflow: auto;
		display: none;
		float: left;
	}
	
	.boutique {
		width: 100%;
		height: 5rem;
		background: linear-gradient(to right, #424244 0%, #b5b5b8 100%);
	}
	
	.boutiqueP {
		width: 40%;
		float: left;
		margin-top: .7rem;
		margin-left: .3rem;
		margin-right: .3rem;
	}
	
	.boutiqueP>img {
		width: 92%;
	}
	
	.boutiqueDiv {
		width: 54%;
		float: left;
		margin-top: .7rem;
		font-size: .6rem;
		color: #fff;
	}
	
	.boutiqueI>.iconfont {
		font-size: .65rem;
		color: #fce06e;
	}
	
	.boutiqueI {
		margin-top: .2rem;
	}
	
	.boutiqueDiv p:nth-child(2) {
		font-size: .4rem;
		margin-top: .6rem;
	}
	
	.boutiqueDiv p:nth-child(3) {
		font-size: .3rem;
		margin-top: .2rem;
	}
	
	.findScreen {
		width: 100%;
		height: 2rem;
		background: #ffffff;
		line-height: 2rem;
		float: left;
		overflow: auto
	}
	
	.findScreen>p {
		width: 20%;
		height: .8rem;
		line-height: .8rem;
		border: .02rem solid lavender;
		border-radius: .3rem;
		margin-left: .3rem;
		text-align: center;
		float: left;
		margin-top: .6rem;
		font-size: .5rem;
	}
	
	.screenUl {
		width: 40%;
		float: right;
		font-size: .5rem;
	}
	
	.screenUl>li {
		width: 33.3%;
		float: left;
		text-align: center;
	}
	
	.findPopular {
		width: 100%;
		overflow: auto;
	}
	
	.findPopular>li {
		width: 49%;
		overflow: auto;
		float: left;
		height: 6.5rem;
		font-size: .5rem;
	}
	
	.findPopular>li:nth-child(2n) {
		float: right;
	}
	
	.findPopular>li p:first-child {
		width: 100%;
		height: 5.3rem;
	}
	
	.findPopular>li p:first-child img {
		width: 100%;
		height: 100%;
	}
	
	.findPopular>li p:last-child {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.findBroadcasting {
		width: 10rem;
		height: 100%;
		overflow: auto;
		display: none;
		float: left;
	}
	
	.broadcasUl {
		width: 100%;
		height: 1.6rem;
	}
	
	.broadcasUl>li {
		width: 50%;
		float: left;
		padding: .37rem;
		font-size: .6rem;
		text-align: center;
		border: .01rem solid lavender;
		border-top: none;
		border-right: none;
	}
	
	.broadcasUl>li:first-child {
		border-left: none;
	}
	
	.broadcasUl>li>.iconfont {
		font-size: .7rem;
	}
	
	.findArtist>li p:first-child {
		height: 3.2rem;
	}
	
	.songRankingUl {
		width: 100%;
	}
	
	.songRankingUl>li {
		width: 100%;
		height: 3.5rem;
		margin-bottom: .2rem;
		border-bottom: .02rem solid lavender;
	}
	
	.songRankingP {
		width: 35%;
		float: left;
		height: 3.5rem;
	}
	
	.songRankingP>img {
		width: 100%;
		height: 100%;
	}
	
	.songRankingDiv {
		width: 65%;
		height: 2.1rem;
		float: right;
		margin-top: .7rem;
	}
	
	.songRankingDiv>p {
		font-size: .55rem;
		text-indent: .3rem;
	}
	
	.seek {
		width: 100%;
		height: 1.5rem;
		overflow: auto;
		background: #f63434;
	}
	
	.seek>p {
		float: left;
		text-align: center;
		margin-top: .2rem;
	}
	
	.seek>p>.iconfont {
		font-size: .7rem;
	}
	
	.seek p:nth-child(1) {
		width: 15%;
	}
	
	.seek p:nth-child(2) {
		width: 70%;
		position: relative;
	}
	
	.seek p:nth-child(3) {
		width: 15%;
	}
	
	.seek p:nth-child(2) input {
		width: 100%;
		height: .9rem;
		position: absolute;
		left: 0px;
		top: .1rem;
		border-radius: .4rem;
		text-indent: 2.2rem;
		font-size: .4rem;
	}
	
	.icoi {
		position: absolute;
		left: 113px;
		top: -15px;
	}
	
	.icoi>.iconfont {
		font-size: .5rem;
	}
	.ass{
		width: 40rem;
		height: 100%;
		overflow-x: auto;
   	    top: 2.5rem;
	}
	.songRanking{
		width: 10rem;
		height: 100%;
		overflow: auto;
		display: none;
		float: left;
	}
	.arr{
		width: 10rem;
	    position: fixed;
	    height: 2.5rem;
	    top: 0px
	}
	.footer {
		position: fixed;
		bottom: 0rem;
	}
</style>