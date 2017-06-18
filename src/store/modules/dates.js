const state = {
  all: []
}

const getters = {
  mostSpokenDay: state => state.all.reduce((prev, current) => (prev.count > current.count) ? prev : current)
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
