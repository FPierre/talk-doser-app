import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import dates from './modules/dates'
import days from './modules/days'
import people from './modules/people'
import swearWords from './modules/swear-words'
import talk from './modules/talk'
import words from './modules/words'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    dates,
    days,
    people,
    swearWords,
    talk,
    words
  },
  strict: debug
})
