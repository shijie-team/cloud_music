<template>
  <div class="news-item">
    <h3 >{{title}}</h3>
    <div class="clearfix">
      <span>{{time}}</span>
      <span>{{commandNum}}</span>
    </div>
  </div>
</template>
<style scoped>
h3{font-size: 0.4rem /* 30/75 */;font-weight: 300;line-height: 0.47rem /* 35/75 */;color: #000;padding: 0.27rem /* 20/75 */ 0;}
.news-item{padding: 0.27rem /* 20/75 */ 0;border-bottom: 0.015rem solid #999;height: 2rem /* 150/75 */}
span{font-size: 0.32rem /* 24/75 */;color: #999;}
span:first-child{float: left;}
span:last-child{float: right;}
</style>
<script type="text/javascript">
export default{
  data(){
    return {
        title:'',
        time:'',
        commandNum:''
    }
  },
  computed:{

  }
  ,
  props:{
    newsMsg:{
      type:Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    getNewsMsg(){
      this.title = this.newsMsg.title  ? this.newsMsg.title : '';
      this.time = this.newsMsg.ptime || this.newsMsg.ptime === 0? this.newsMsg.ptime :'';
      if(this.time){
      var oldDay =  new Date(this.time);
      var today = new Date();
      if(oldDay.getYear()>today.getYear()){
        this.time = oldDay.getYear() - today.getYear() +'年前';
      } else if(oldDay.getMonth() > today.getMonth()){
        this.time = oldDay.getMonth() - today.getMonth() +'月前';
      } else if(oldDay.getDate() > today.getDate()){
        this.time = oldDay.getDate() - today.getDate() +'天前';
      } else if(oldDay.getHours() > today.getHours()){
        this.time = oldDay.getHours() - today.getHours() +'小时前';
      } else if(oldDay.getMinutes()>today.getMinutes()){
        this.time = oldDay.getMinutes() - today.getMinutes() + '分钟前';
      } else if(oldDay.getSeconds() >today.getSeconds()){
        this.time = oldDay.getSeconds() - today.getSeconds() + '秒前'
      } else {
          this.time = '1分钟前'
      }
      }
      this.commandNum = this.newsMsg.commentCount || this.newsMsg.commentCount === 0 ?
      '评论：'+this.newsMsg.commentCount :'';
    }
  },
mounted(){
    this.getNewsMsg();
}

}
</script>
