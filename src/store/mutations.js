import * as types from './mutation-types'

export default {
  [types.RECEIVE_TALK_DATA] (state, data) {
    state.words.all = data.words
  }
}
