const state = {
  all: {}
}

const getters = {
  talk: state => state.all
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
