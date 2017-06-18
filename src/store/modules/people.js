const state = {
  all: []
}

const getters = {
  people: state => state.all,
  concernedPeople: state => state.all.map((people) => people.pseudo).join(', ')
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
