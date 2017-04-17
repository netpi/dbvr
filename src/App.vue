<template>
  <transition 
    mode="out-in"
    enter-active-class="bounceInLeft"
    appear> 
  <div id="app" class='animated animated-bounceInLeft' >
    <header class = "header" v-if="pathDeep <= 1">
      <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-center wrap_nav">
              <router-link  class="nav-item is-tab " to="/all">全部</router-link>
              <router-link  class="nav-item is-tab " to="/cartoon">动画</router-link>
              <router-link  class="nav-item is-tab " to="/game">游戏</router-link>
              <router-link  class="nav-item is-tab " to="/movie">电影</router-link>
              <router-link  class="nav-item is-tab " to="/try">体验</router-link>
              <router-link  class="nav-item is-tab " to="/scenery">风景</router-link>
            </div>
        </div>
      </nav>
    </header>  
    <div class="history" v-else>
      <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <span v-on:click='history()' class='back'>&lt;</span>
          </a>
        </div>    
      </div>
      </nav>
    </div>
    <div class="view container" id="wrap">
      <transition 
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear
        appear-active-class=null
        > 
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </div>
  </transition> 
</template>

<script>
import router from './router'
function nextTo(pathname,direction="left") {
  const arr = ["/all","/cartoon","/game","/movie","/try","/scenery"]
  let index = arr.findIndex(item => item == pathname)
  let nextIndex = 0
  console.log('pathname',pathname)
  if(direction === 'left'){
    nextIndex = index == arr.length-1
    ? 0
    : index+1
  }
  if(direction === 'right'){
    nextIndex = index === 0
    ? arr.length-1
    : index-1
  }
  router.replace(arr[nextIndex])
}
let path
export default {
  name: 'app',
  mounted: function() {        
    path = this.$route.path
    $("#wrap").on('swipeRight',function(){      
      nextTo(path,'right')
    }),
    $("#wrap").on('swipeLeft',function(){
      nextTo(path,'left')
    })
  },
  methods:{
    history (n = -1) {
      window.history.go(n)
    }
  },
  computed:{
    getPath () {
      return this.$route.path
    },
    pathDeep(){
      const patharr =  this.$route.path.match(/(\/[^/]+)/g)||[]
      return patharr.length
    }
  },
  watch: {
    getPath () {      
      path = this.$route.path
    }
  },
}
</script>

<style lang="scss" >
@import '~animate.css';
.animated {
  animation-duration: .377s;
}
.animated-bounceInLeft{
  animation-duration: .977s;
}
@import "~bulma" ;
.is-tab {
  padding-left:0.5em !important;
  padding-right:0.5em !important;
}
#wrap{
  min-height:300px
}
.wrap{
  min-height:300px
}
.is-active {
    border-bottom: 3px solid orange !important;
    color: orange !important ;    
}
.is-tab {
  &:hover{
    border-bottom-color: orange !important ;
    }
}
.history{
  position: fixed;
  top: 0px;  
  z-index:999;
  width:100%;  
  .nav{
    background: rgba(47,47,47,0.98);
  }
}
.back{
  font-weight: bold;
  font-size:1.5em;
}
.content {
  text-align: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  width:90%;
  margin:10px auto;
  border: 1px solid black;
  height: 600px
}
</style>
