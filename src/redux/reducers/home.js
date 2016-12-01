import {createReducer} from 'redux-act'

import {
  fetchTopics
} from 'actions'

const initState = {
  page: 1,
  topics: [],
  loading: false,
  tab: ''
}

export default createReducer({
  [fetchTopics.request] (state) {
    return Object.assign({}, state, {loading: true})
  },
  [fetchTopics.ok] (state, {response: {tab, page, topics}}) {
    return {tab, page, topics, loading: false}
  }
}, initState)
