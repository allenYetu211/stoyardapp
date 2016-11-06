import {
  INCREMENT,
  DECREMENT,
  INCREMENTIFODD,
  INCREMENTASYNC,
  TOGGLESW
} from '../actions'
const state = {
  count: 0,
  showhi: false
}
const mutations = {
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  },
  [INCREMENTIFODD] (state) {
    if ((state.count + 1) % 2 === 0) {
      state.count++
    }
  },
  [INCREMENTASYNC] (state) {
    setTimeout(() => {
      state.count++
    }, 1000)
  },
  [TOGGLESW] (state) {
    state.showhi = !state.showhi
  }
}

export default {
  state,
  mutations
}
