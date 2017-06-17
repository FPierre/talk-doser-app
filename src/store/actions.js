import talkData from '@/api/talk-data'
import * as types from './mutation-types'

export const getTalkData = ({ commit }) => {
  talkData.getTalkData(data => commit(types.RECEIVE_TALK_DATA, data))
}
