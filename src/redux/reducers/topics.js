import {createReducer} from 'redux-act'

import {
  fetchTopics
} from 'actions'

const initState = {
  page: 1,
  topics: []
}

export default createReducer({
  [fetchTopics.ok] (state, payload) {
    console.log(payload)
    return payload
  }
}, initState)
