const state = {
  all: []
}

const getters = {
  people: state => state.all,
  peoplePseudo: state => state.all.map((people) => people.pseudo),
  pronouncedWords: state => state.all.map((people) => people.pronouncedWords)
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
