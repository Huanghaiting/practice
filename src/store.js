import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 每个应用将仅仅包含一个 store 实例。
export default new Vuex.Store({
  state: {
    count: 0,
    number: 100
  },
  getters: {
    /* eslint-disable */
    tenTimesCount(state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters)
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--

  },
  actions: {

  }
})
