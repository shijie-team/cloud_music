<template>
	<div id="hunt">
		<div class="huntSeek">
			<p>
				<input type="text" placeholder="搜索音乐" v-model="mus" @input="huntmus" />
				<span class="ico"><i class="iconfont icon-sousuo"></i></span>
			</p>
			<p @click="cancel">取消</p>

			<ul class="huntUl" v-show="isshow">
				<li v-for="intem in url.items" @click="acquire(intem)">{{intem.title}}</li>
			</ul>
		</div>
		<p class="huntP"><i class="iconfont icon-wode"></i>&nbsp;&nbsp;歌手分类&nbsp;></p>
		<div class="hot">
			<p>&nbsp;&nbsp;&nbsp;&nbsp;热门搜索</p>
			<div class="span">
				<span v-for="item in hotHunt" @click="huntspan(item)">{{item}}</span>
			</div>
		</div>
		<ul class="HuntU">
			<li v-for="item in obj" @click="hut(item.title)">
				{{item.title}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "hunt",
		data() {
			return {
				hotHunt: ["我想和你唱", "无条件", "醉玲珑", "我的前半生", "君主-假面的主人", "我的道姑朋友", "悟空传", "薛之谦"],
				mus: "",
				items: [],
				columnInfoList: [],
				url: [],
				isshow: false,
				obj: []
			}

		},
		methods: {
			acquire: function(cc) {
				this.nameSong(cc)
				this.isshow = false;
				localStorage.setItem('singleSong', JSON.stringify(cc));
				this.$router.push('/MusicPlayer')
			},
			nameSong: function(aff) {
				this.obj = JSON.parse(localStorage.getItem('collectioned'));
				if(this.obj) {
					for(var i = 0; i < this.obj.length; i++) {
						if(this.obj[i].title === aff.title) {
							this.obj.splice(i, 1)
						}
					}
				} else {
					this.obj = [];
				}
				this.obj.push(aff)
				localStorage.setItem('collectioned', JSON.stringify(this.obj))
				
			},
			cancel: function() {
				history.go(-1);
			},
			huntmus: function() {
				this.demonstrate(this.mus)
				this.isshow = true

			},
			hut:function(name){
				demonstrate(name)
			},
			demonstrate: function(arr,flag) {
				var sel = this
				this.$http.get('https://douban.fm/j/v2/query/all?q=' + arr + '&start=0&limit=all').then(function(res) {
					sel.items = res.body
					for(var i = 0; i < sel.items.length; i++) {
						for(var j = 0; j < sel.items[i].items.length; j++) {
							if(sel.items[i].items[j].url) {
								sel.url = sel.items[i];
								if(flag){
									localStorage.setItem('singleSong', JSON.stringify(sel.items[1].items[0]));
									this.$router.push('/MusicPlayer');
								}
							}
							break;
						}
					}
				})
				
			},
			huntspan: function(b) {
				this.demonstrate(b,true)
			}
			
		},
		mounted:function(){
			this.nameSong()
		}
	}
</script>

<style>
	.hunt {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.huntSeek {
		width: 100%;
		height: 1.5rem;
		overflow: auto;
		background: #f63434;
	}
	
	.huntSeek>p {
		float: left;
		text-align: center;
		margin-top: .2rem;
	}
	
	.huntSeek>p>.iconfont {
		font-size: .7rem;
	}
	
	.huntSeek p:nth-child(1) {
		width: 85%;
		position: relative;
	}
	
	.huntSeek p:nth-child(2) {
		width: 15%;
		font-size: .5rem;
		margin-top: .45rem;
	}
	
	.huntSeek p:nth-child(1) input {
		width: 100%;
		height: .9rem;
		position: absolute;
		left: 0px;
		top: .1rem;
		border-radius: .4rem;
		text-indent: .6rem;
		font-size: .4rem;
	}
	
	.huntP {
		width: 100%;
		height: 1rem;
		text-align: center;
		font-size: .4rem;
		line-height: 1rem;
		border-bottom: .02rem solid lavender;
	}
	
	.huntP>.iconfont {
		font-size: .7rem;
	}
	
	.hot {
		width: 100%;
		font-size: .3rem;
		line-height: 1rem;
	}
	
	.span {
		width: 100%;
		white-space: pre-wrap;
	}
	
	.span>span {
		display: inline-table;
		border: .02rem solid lavender;
		line-height: .5rem;
		font-size: .4rem;
		padding: .2rem;
		margin-left: .37rem;
		border-radius: .4rem;
		margin-bottom: .2rem;
	}
	
	.ico {
		position: absolute;
		left: 6px;
		top: -15px;
	}
	
	.ico>.iconfont {
		font-size: .5rem;
	}
	
	.huntUl {
		width: 100%;
		position: absolute;
		z-index: 3;
		background: #fff;
		top: 1.5rem;
		overflow: auto;
		height: 91%;
		font-size: .5rem;
	}
	
	.huntUl>li {
		border-bottom: .02rem solid lavender;
		line-height: 1rem;
		text-indent: .3rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.HuntU {
		width: 100%;
		height: 20%;
		font-size: .4rem;
	}
	
	.HuntU>li {
		text-indent: .3rem;
		line-height: 1rem;
	}
</style>