// import talkData from '../../api/talk-data'
// import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  getTexts: state => state.all
}

const actions = {
  // getAllTexts ({ commit }) {
  //   talkData.getTalkData(data => {
  //     commit(types.RECEIVE_TALK_DATA, { data })
  //   })
  // }
}

const mutations = {
  // [types.RECEIVE_TALK_DATA] (state, { texts }) {
  //   state.all = texts
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
