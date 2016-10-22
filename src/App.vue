<template>
  <div id="app" @scroll= "_scroll">
<!--   <div>
    <group>
      <cell title="vue" value="cool"></cell>
    </group>
  </div> -->
     <headers></headers>

     <div class="router-content" >
         <router-view></router-view>
     </div>
  </div>
</template>

<script>
import Headers from './components/Header'

export default {
  components: {
    Headers
  },

  methods: {
    _scroll (ev) {
      console.log(ev)
    }
  }
}
</script>

<style lang="scss">
@function px2rem( $px ){
  @return $px*320/$designWidth/20 + rem;
}
$designWidth : 350;
html{
width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
body{
      display: block;
    height: 100%;
}
#app {
  .router-content{
    display: block;
    width: 100%;
    height: auto;
    min-height: 100%;
    position: relative;
    z-index: 0;
    padding-top: px2rem(95); 
  }
}
</style>
