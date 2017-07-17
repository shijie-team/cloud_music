<template>
	 <div>  
        <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in msg">  
            	<img :src="item.picStr"/>
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
    </div> 
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

export default {
    data () {
      return {
        swiperOption: {
          autoplay: 1000,
          loop: true,
          autoplayDisableOnInteraction:false,
          pagination: '.swiper-pagination'
        }
      }
    },
    components:{
    	swiper,
    	swiperSlide
    },
    props:{
		msg:{}
	}
}
</script>

<style>
	img{width: 100%;}
</style>