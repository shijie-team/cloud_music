<template id="">
  <div  id="musicPlayer">
    <TopBack :title='songsName'></TopBack>
    <div class="wrap">
      <div class="author">
        {{author}}
      </div>
      <div class="volume clearfix">
        <span>音量:</span>
        <span>{{audioVolume}}</span>
      </div>
      <div class="flim-img" ref='flim'>
        <img src="../assets/image/film.png" alt="" />
        <img :src="songImg" alt="">
      </div>
    </div>
    <audio id="audio" :src="currentSongUrl" ref='audio'>对不起您的浏览器不支持H5，请使用最新版本的浏览器</audio>

    <div class="controls">
      <div class="collection">
        <i class="iconfont icon-aixin" @click='setCollection' :class="isCollected"></i>
      </div>
      <div class="range">
        <span>{{currentTime}}</span>
        <input type="range" name="" id="rangeBar" v-model="songRange" @change='changeSongRange' />
        <span>{{totalTime}}</span>
      </div>
      <div class="changeBtns">
        <i class="iconfont icon-xuanzhuan" :class='playStatue' @click='changePlayState'></i>
        <i class="iconfont icon-shangyishou" @click='playPrevSong' ref='preBtn'></i>
        <i class="iconfont icon-bofang-copy" @click='playOrStop' :class='isPlay'></i>
        <i class="iconfont icon-shangyishou1" @click='playNextSong' ref='nextBtn'></i>
        <i class="iconfont icon-quku"  @click='showMenu'></i>
      </div>
    </div>
    <SongsMenu v-show='menuShow'></SongsMenu>
  </div>
</template>
<script type="text/javascript">
import TopBack from '../components/TopBack'
import SongsMenu from '../components/SongsMenu'
export default {
  name:'musicPlayer',
  components:{
    TopBack,SongsMenu
  },
  data(){
    return{
      songsName:"super star",
      songs:[],
      playStates:['red','green','yellow'],
      playStateIndex:0,
      author:'S.H.E',
      songImg:'',
      currentSongUrl:'',
      songRange:0,
      currentTime:'00:00',
      totalTime:'00:00',
      playedSongs:[],
      currentSongIndex:0,
      audioVolume:0,
      checkTimer:0,
      isPlay:'',
      crrentSong:{},
      isCollected:'',
    }
  },
  computed:{
    playStatue:function(){
      return this.playStates[this.playStateIndex];
    },
    menuShow(){
      return this.$store.state.menuIsShow;
    }
  },
  methods:{
    setPlayedSong(songObj){
      var playedSongs = JSON.parse(localStorage.getItem('playedSongs'));
      if(playedSongs){
        this.playedSongs = playedSongs;
      }
      this.playedSongs.unshift(songObj);
      localStorage.setItem('playedSongs',JSON.stringify(this.playedSongs));
    },
    setCollection(){
      var songs = JSON.parse(localStorage.getItem('collectioned'));
      if(!songs){
        songs = [];
      }
      if(this.currentSong.title){
        var index = this.getSongIndex(songs,this.currentSong)
        if(index || index === 0){
          songs.splice(index,1);
          this.isCollected = ''
        } else {
          songs.unshift(this.currentSong);
          this.isCollected = 'isCollected'
        }
      }
      localStorage.setItem('collectioned',JSON.stringify(songs));
    },
    checkPlayStatus(){
      if(this.$refs.audio && this.$refs.audio.ended){
        this.changeSongs();
      }
      this.setSongTime();
    },
    playOrStop(){
      if(this.$refs.audio.readyState == 4){
        if(!this.$refs.audio.paused) {
          this.$refs.flim.style.animationPlayState = 'paused';
          this.$refs.audio.pause();
          clearInterval(this.checkTimer);
          this.isPlay = '';
        } else {
          this.$refs.flim.style.animationPlayState = 'running';
          this.$refs.audio.play();
          clearInterval(this.checkTimer)
          this.checkTimer = setInterval(this.checkPlayStatus,20);
          this.isPlay = 'isPlay'
        }
      } else {
        setTimeout(this.playOrStop,20)
      }
    },
    changeSongs(){

      if(this.playStateIndex === 0){ //顺序播放
      } else if(this.playStateIndex === 1){ //循环单曲
        --this.currentSongIndex;
      } else if(this.playStateIndex === 2){//随机播放
          this.currentSongIndex = Math.floor(Math.random()*this.songs.length)-1;
      }
      this.playNextSong();
    },
    playPrevSong(){
        this.clickEfect(this.$refs.preBtn)
      this.$refs.audio.pause();
      var songObj = this.songs[--this.currentSongIndex < 0 ? this.songs.length -1 : this.currentSongIndex];
      this.initSongData(songObj);
    },
    playNextSong(){
        this.clickEfect(this.$refs.nextBtn)
      this.$refs.audio.pause();
      var songObj = this.songs[++this.currentSongIndex > this.songs.length-1 ? 0 : this.currentSongIndex];
      this.initSongData(songObj);
    },
    changePlayState(){
      if(++this.playStateIndex > 2){
        this.playStateIndex = 0;
      }
    },
    changeSongRange(){
      this.$refs.audio.currentTime =this.$refs.audio.duration * this.songRange/100;
      this.setSongTime();
    },
    getSongs(api){
      var songs = JSON.parse(localStorage.getItem('collectioned'));
      if(songs){
        this.songs = songs;
      }
      this.$http.get(api)
      .then(function(res){
        var songObj = res.data[1].items["0"];
        if(this.getSongIndex(this.songs,songObj) || this.getSongIndex(this.songs,songObj) === 0){
              this.currentSongIndex = this.getSongIndex(this.songs,songObj);
        } else {
            this.songs.unshift(songObj);
             this.currentSongIndex = 0;
        }
        this.initSongData(this.songs[0]);
      })

    },
    setSongTime(){
        this.totalTime = this.formateTime(this.$refs.audio.duration/60)+':'+this.formateTime(this.$refs.audio.duration%60);
        this.currentTime =  this.formateTime(this.$refs.audio.currentTime/60)+':'+this.formateTime(this.$refs.audio.currentTime%60);
        this.songRange = this.$refs.audio.currentTime*100/this.$refs.audio.duration;
    },
    formateTime(time){
      time = Math.floor(time);
      var fTime = '00';
      if(!isNaN(time)){
        if(time < 10){
          fTime = '0'+time;
        } else {
          fTime = ''+time;
        }
      }
      return fTime;
    },
    initSongData(songObj){
      if(!songObj){
        return;
      }
      this.currentSong = songObj;
      this.songsName = songObj.title;
      this.author = songObj.artist_name;
      this.songImg = songObj.cover;
      this.currentSongUrl = songObj.url;
      if(this.$refs.audio){
        this.audioVolume = this.$refs.audio.volume;
        this.$refs.audio.currentTime = 0;
        this.setPlayedSong(songObj);
        this.playOrStop();
      } else {
        setTimeout(this.initSongData,20,songObj)
      }

    },
    getSongIndex(songs,songObj){
      for(var i = 0 ; i < songs.length;i++){
        if(songs[i].title  == songObj.title){
            return i;
        }
      }
      return false;
    },
    clickEfect(ele){
      ele.style.color = 'rgba(255,255,255,1)'
      setTimeout(function(){
        ele.style.color = 'rgba(255,255,255,0.6)'
      },500)
    },
    showMenu(){
      this.$store.dispatch('setSongsList',this.songs);
      this.$store.dispatch('showMenu',true);
    }
  },
  mounted(){
    var api = 'https://douban.fm/j/v2/query/all?q=On The Night Like This&start=0&limit=all'
    this.getSongs(api);
    clearInterval(this.checkTimer)
    this.checkTimer = setInterval(this.checkPlayStatus,20);
  }
}
</script>

<style scoped>
#musicPlayer{position: fixed;width: 100%;height: 100%;z-index: 1999;background: url('../assets/image/bg_snowberg.jpg');background-size: 100% 100%;}
.wrap{width: 100%;height: 80%;position: relative;}
.flim-img{width: 80%;height: 80vw;position: absolute;left: 10%;top:20%;animation: rotate 3s linear infinite paused;}
@keyframes  rotate{
  from{transform:rotate(0deg);}
  to{transform:rotate(360deg);}
}
.wrap img{width: 100%;height: 100%;position: absolute;left: 0;top: 0;border-radius: 50%;}
.wrap img:last-child{width: 50%;height: 50%;left: 25%;top: 25%;}
.author{margin-top: 1.33rem /* 100/75 */;font-size: 0.4rem /* 30/75 */;text-align: center;color: rgba(255,255,255,0.8);line-height: 0.67rem /* 50/75 */;}
.volume{font-size: 0.4rem /* 30/75 */;text-align: left;line-height:0.53rem /* 40/75 */;color: rgba(255,255,255,0.8)}
.volume span{display: block;float: left;width: 47%;}
.volume span:first-child{text-align: right;width: 53%;}
.controls{height: 20%;font-size: 0.4rem /* 30/75 */;background: rgba(0,0,0,0.8);color: rgba(255,255,255,0.6);padding: 0.27rem /* 20/75 */}
.range{width: 100%;height:33.33%;display: flex;align-items: center;justify-content: center;}
.range span{font-size: 0.53rem /* 40/75 */;}
.range input{width: 60%;margin: 0.27rem /* 20/75 */}
.changeBtns .iconfont{font-size: 0.8rem /* 60/75 */;}
.changeBtns{width: 100%;height:33.33%;display: flex;justify-content: space-around;align-items: center;}
.collection{height: 33.33%;display: flex;justify-content: center;align-items: center;}
.collection .iconfont{font-size: 0.8rem /* 60/75 */;color: #ffffff;}
.red{color: red;opacity: 0.5;}
.green{color: green;opacity: 0.5;}
.yellow{color: yellow;opacity: 0.5;}
.isPlay{color: rgba(255,255,255,1)}
.collection .iconfont.isCollected{color: #ff5577;}
</style>
