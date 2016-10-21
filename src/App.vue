<template>
  <div id="app">
    <headers></headers>
  </div>
</template>

<script>
import Headers from './components/Header'

export default {
  name: 'app',
  components: {
    Headers
  }
}
</script>

<style lang="scss">
@function px2rem( $px ){
  @return $px*320/$designWidth/20 + rem;
}
$designWidth : 350;

#app {
  padding:0 px2rem(5);
}
</style>
