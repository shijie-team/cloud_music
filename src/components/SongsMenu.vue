<template id="">
  <div class="songsMenu">
    <div class="menu" v-show='menuState'>
      <p><i class="iconfont icon-cuo" @click='close'></i></p>
      <ul>
        <li @click ='getSong(v,i)' v-for='(v,i) in songs' :class="selectedSongIndex == i ?  'choosen' : ''">{{v.title}}----{{v.artist_name}}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.choosen{background: rgba(0,0,0,0.3)}
.songsMenu{width: 100%;height: 100%;background: rgba(0,0,0,0.5);position: fixed;left:0;top: 0;}
.menu{width: 100%;height: 80%;padding: 0.4rem /* 30/75 */;padding-bottom: 0;position: absolute;bottom: 0;left: 0;}
.menu p{width: 100%;height: 10%;}
.menu p .iconfont{float: right;color: #ffffff;font-size: 0.67rem /* 50/75 */;margin-right:0.27rem /* 20/75 */;margin-top: 0.27rem /* 20/75 */}
.menu ul {width: 100%;height: 90%;background: #ffffff;overflow-x: hidden;padding: 0.27rem /* 20/75 */}
.menu li {width: 100%;text-align: left;font-size: 0.4rem /* 30/75 */;line-height: 0.53rem /* 40/75 */;padding:0.27rem /* 20/75 */;color: #000000;white-space: nowrap;text-overflow: hidden;overflow: hidden;border-bottom: 1px solid #000000;}
.menu .isClick{background: #00000;color:#ffffff; }
</style>
<script type="text/javascript">
export default{
  data(){
    return {
      clickIndex:-1,
      menuState:false
    }
  },
  computed:{
    songs(){
      return this.$store.state.songList;
    },
    selectedSongIndex(){
      return this.$store.state.selectedSongIndex;
    }
  },
  mounted(){
    this.menuState = true;
  },
  methods:{
    getSong(v,i){
      this.selectedSongIndex = i;
      this.$store.dispatch('setSelectedSongIndex',i);
      this.changeSong();
    },
    close(){
     
      this.$store.dispatch('showMenu',false);
    },
    changeSong(){
      this.$emit('changeCurrenSong',this.selectedSongIndex)
    }
  }
}
</script>
