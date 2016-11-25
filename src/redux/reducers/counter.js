import {createReducer} from 'redux-act'

import {
  increment,
  decrement
} from 'actions'

const counterReducer = createReducer({
  [increment] (state) {
    return state + 1
  },
  [decrement] (state) {
    return state - 1
  }
}, 0)

export default counterReducer
