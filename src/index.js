import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Router, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import app from 'reducers'
import routes from 'routes'
import 'styles/index.styl'

injectTapEventPlugin()

const store = createStore(app, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)

