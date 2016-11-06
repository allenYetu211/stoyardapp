import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

// import list from './modules/list'
import common from './modules/common'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    // list,
    common
  }
})
