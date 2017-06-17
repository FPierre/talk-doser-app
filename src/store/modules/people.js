const state = {
  all: []
}

const getters = {
  people: state => state.all,
  concernedPeople: state => Object.keys(state.all).join(', ')
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
