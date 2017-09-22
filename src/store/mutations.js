import * as types from './types'
export const mutations = {
  [types.INCREMENT](state, n){
    state.count += n
  },
  [types.DECREMENT](state, n){
    state.count -= n
  }
}