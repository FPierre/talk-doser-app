import * as types from './mutation-types'

export default {
  [types.RECEIVE_TALK_DATA] (state, data) {
    state.dates.all = data.dates
    state.days.all = data.days
    state.people.all = data.people
    state.swearWords.all = data.swearWords
    state.talk.wordsCount = data.talk.wordsCount
    state.talk.lines = data.talk.lines
    state.words.all = data.words
  }
}
