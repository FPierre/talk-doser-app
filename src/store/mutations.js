import * as types from './mutation-types'

export default {
  [types.RECEIVE_TALK_DATA] (state, data) {
    state.dates.all = data.dates
    state.days.all = data.days
    state.people.all = data.people
    state.swearwords.all = data.swearwords
    state.talk.all = data.talk
    state.words.all = data.words
  }
}
