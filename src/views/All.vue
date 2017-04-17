<template>

<div class="wrap" >
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">图一</div>
        <div class="swiper-slide">图二</div>
        <div class="swiper-slide">图三</div>
    </div>
    
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
  <p class='subtitle'>
      优质作者
  </p>
  <div class='section wrap_2 has-shadow'>
    <div class="columns is-mobile">
      <div class="column">
        <router-link  class="entry" to="/all/detail">入口1</router-link>
      </div>
      <div class="column">
        <router-link  class="entry" to="/all/detail">入口2</router-link>
      </div>
      <div class="column">
        <router-link  class="entry" to="/all/detail">入口3</router-link>
      </div>
      <div class="column">
        <router-link  class="entry" to="/all/detail">入口4</router-link>
      </div>
    </div>
  </div>
  <div class="last">
    <h1>
      占位 , 占位
    </h1>
  </div>
</div>
</template>

<script>

//  import $ from 'jquery'
// import $ from "jquery-mobile/dist/jquery.mobile.js"
// require("imports-loader?this=>window!jquery-mobile/dist/jquery.mobile.js");
// console.log($)

export default {
  name: 'All',
  created:function(){
    this.$store.dispatch('INIT')
  },
  mounted:function(){
     var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      
      // If we need pagination
      pagination: '.swiper-pagination',
      paginationClickable: true,
      // Navigation arrows
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      
      // And if we need scrollbar
      speed: 400,
      spaceBetween: 10,
      autoplay:4000
    })
  }
}
</script>

<style lang="scss">

.swiper-container {
    
    height: 150px;
    width:80%;
    margin: 10px auto;
}  
.subtitle {
  width:100%;
  text-align: center;
  color:rgb(50,50,50);
  font-size:1em
}
.swiper-slide{
  background:gray
}
.swiper-slide , .last{
  text-align: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}
.wrap_2{
  padding:20px 2.5em 5px;
  text-align: center;
  height:auto;
  .column{
    padding:0px;
  }
  .entry{
      padding:15px;
      border:1px solid orange;
      height:20px;
      color:gray;
      // display: block
      // background: gray
  }
}
.last{
  margin: 50px 10px ;
  height : 350px;
  border : 1px solid black
}
</style>
