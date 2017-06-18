const state = {
  all: []
}

const getters = {
  people: state => state.all,
  concernedPeople: state => state.all.map((people) => people.pseudo),
  pronouncedWords: state => state.all.map((people) => people.pronounced_words)
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
