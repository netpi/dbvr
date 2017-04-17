import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: true
}
const getters = {

}

const actions = {
  INIT: ({commit}) => {
    commit('SET_LOADING', {loading: true})
    setTimeout(function () {
      commit('SET_LOADING', {loading: false})
    }, 500)
  }
}

const mutations = {
  SET_LOADING: (state, {loading}) => {
    state.loading = loading
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
