<template>
  <div class="thecontact">
    <!-- Contact -->
    <h1>点击: {{ $store.state.common.count }} 次数,此為 {{ evenOrOdd }} <br></h1>
    <button class="btn"  @click="increment">+</button>
    <button class="btn"  @click="decrement">-</button><br>
    <button class="btn"  @click="incrementIfOdd">业务设计：当 奇数时，才增加</button><br>
    <button class="btn"  @click="incrementAsync">业务设计：1秒后，才会增加 1</button><br>
    <button @click="togglesw">切换</button>
     <button @click="mapAG">切换sss</button>
    <p v-if="ifswhi">1111</p>
     
    {{ifswhi}}

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'ifswhi',
      'evenOrOdd'
    ])
  },
  methods: {
    ...mapActions([
      'togglesw',
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    mapAG () {
    }
  }
}
</script>

<style>
  
</style>