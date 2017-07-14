<template lang="html">
  <div id="news"  ref='news'
            @scroll='getMoreNews'
            @touchend='newsTouchEnd'
            @touchstart='newsTouchStart'
            @touchmove='newsTouchMove'
          >
    <TopBack :title="channelTitle"></TopBack>
    <div class="load" v-show='isUpShow'>
      数据加载中....
    </div>
    <div class="news-item" v-for='(v,i) in newsData'>
      <NewsItem :newsMsg='v'></NewsItem>
    </div>
  </div>
</template>

<script>
import NewsItem from '../components/NewsItem'
import TopBack from '../components/TopBack'
export default {
  name:'news',
  data(){
    return{
      channelTitle:'',
      newsData:[],
      startPage:0,
      flag:true,
      touchStartX:0,
      touchStartY:0,
      isUpShow:true
    }
  },
  components:{
    NewsItem,
    TopBack
  },
  methods:{
    getApi(){
      return 'http://3g.163.com/touch/reconstruct/article/list/BD2AC4LMwangning/'+this.startPage
      +'-10.html';
    },
    getMoreNews(){
        if( this.$refs.news.scrollTop+this.$refs.news.clientHeight >= this.$refs.news.scrollHeight - 100){
            if(this.flag){
              this.startPage +=10;
              this.getNewsMessage(false);
              this.flag = false;
            }
        }
    },
    getNewsMessage(upOrDown){
      var api = this.getApi();
      this.$http.jsonp(api,{jsonpCallback:'artiList'})
      .then(function(res){
        this.flag = true;
        this.isUpShow = false;
        if(this.newsData.length>0 &&  res.data.BD2AC4LMwangning.length>0){
          if(upOrDown){
            this.newsData = res.data.BD2AC4LMwangning.concat(this.newsData);
          } else {
            this.newsData = this.newsData.concat(res.data.BD2AC4LMwangning);
          }
        } else if(res.data.BD2AC4LMwangning.length>0) {
          this.newsData = res.data.BD2AC4LMwangning;
        } else {
          this.startPage -= 10;
        }
      });
    },
    newsTouchStart:function(event){
      var e = event || window.event;
      this.touchStartX = e.changedTouches["0"].clientX;
      this.touchStartY = e.changedTouches["0"].clientY;
    },
    newsTouchMove:function(event){
      var e = event || window.event;
      var touchEndX = e.changedTouches["0"].clientX;
      var touchEndY = e.changedTouches["0"].clientY;
      if(Math.abs(touchEndX-this.touchStartX) <= 50 && touchEndY>this.touchStartY){
            this.isUpShow = true;
      }
    },
    newsTouchEnd:function(event){
      var e = event || window.event;
      var touchEndX = e.changedTouches["0"].clientX;
      var touchEndY = e.changedTouches["0"].clientY;
      if(Math.abs(touchEndX-this.touchStartX) <= 50 && touchEndY-this.touchStartY > 100){
            this.getNewsMessage(true);
      }

    },

  },

  beforeMount:function(){
    this.channelTitle = '音乐资讯';
    this.getNewsMessage(false);
  },
  mounted:function(){
    // this.$refs.news.addEventLinstener('touchstart',this.newsTouchStartEvent);
    // this.$refs.news.addEventLinstener('touchend',this.newsTouchEndEvent);
    // @scroll='getMoreNews()'

  }
}
</script>

<style lang="css">
#news{width: 100%;height: 100%;padding-top: 1.07rem /* 80/75 */;overflow-y: auto;}
.news-item{padding: 0 0.4rem /* 30/75 */;text-align: left;}
.load{width: 100%;line-height:1.33rem /* 100/75 */;font-size: 0.67rem /* 50/75 */;text-align: center;}

</style>
