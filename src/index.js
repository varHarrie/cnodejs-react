import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Router, browserHistory} from 'react-router'

import app from 'reducers'
import routes from 'routes'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import 'styles/index.styl'

const store = createStore(app, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)

