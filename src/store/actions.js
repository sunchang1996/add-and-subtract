import * as types from './types'
export const actions = {
  [types.INCREMENT]({commit}, value){
    commit(types.INCREMENT,value)
  }
}