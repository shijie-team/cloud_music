<template id="">
    <div class="top-back">
        <h3>  <i  @click='goback' class="iconfont icon-shang-copy-copy"></i>{{title}}</h3>
    </div>
</template>
<style scoped>
#musicPlayer{background: url('../assets/image/bg_snowberg.jpg')}
    .top-back{position: fixed;top: 0;left: 0;width: 100%;line-height: 1.07rem /* 80/75 */;background: #333;color: #ffffff;}
    h3{width:90%;font-weight: 300;float: left;font-size: 0.4rem /* 30/75 */;text-align: center;}
    .iconfont{font-size: 0.4rem /* 30/75 */;float: left;width: 10%;}
</style>
<script type="text/javascript">
  export default{
    props:{
      title:{
        type:String,
        default(){
          return '';
        }
      }
    },
    methods:{
      goback(){
        history.go(-1);
      }
    }
  }
</script>
