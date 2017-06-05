import texts from '../../api/texts'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allPendingTexts: state => state.all
}

const actions = {
  getAllTexts ({ commit }) {
    texts.getTexts(texts => {
      commit(types.RECEIVE_PENDING_TEXTS, { texts })
    })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
