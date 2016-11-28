import {createReducer} from 'redux-act'

import {
  setTopics
} from 'actions'

const topics = createReducer({
  [setTopics] (state, topics) {
    return topics
  }
}, [])

export default topics
