import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0,
}
import {actions} from './actions'
import {mutations} from './mutations'
import {getters} from './getters'
export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})