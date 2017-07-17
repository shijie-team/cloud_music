<template lang="html">
  <div class="search">
      <input type="text" :placeholder="title" class="searchIput" @input="searchInput" ref="searchRef">
  </div>
</template>

<script>
export default {

  methods:{
    searchInput(){
      var inputVal = this.$refs.searchRef.value;
      console.log(inputVal);
      this.$emit('searchInput', inputVal);
    }
  },
  props:{
      title:{
        type:String,
        default:function(){
          return "搜索本地歌曲"
        }
      }
  },

}
</script>

<style lang="css" scoped>
.search{width: 100%;height: 1.35rem;background: #f0f0f0;line-height: .9rem;padding-top: .2rem;padding-left: .9rem;}
.searchIput{line-height: .9rem;width: 90%;height: .9rem;font-size: .4rem;font-weight: 400;border: 1px solid #ccc;border-radius: .67rem;text-align: center;}
</style>
