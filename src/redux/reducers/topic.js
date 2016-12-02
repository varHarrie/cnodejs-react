import {createReducer} from 'redux-act'

import {
  fetchTopic
} from 'actions'

const initState = {
  topic: null,
  loading: false
}

export default createReducer({
  [fetchTopic.request] (state) {
    return Object.assign({}, state, {loading: true})
  },
  [fetchTopic.ok] (state, {response: {author, topic, replies}}) {
    return {topic, loading: false}
  }
}, initState)
