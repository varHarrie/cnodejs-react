import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Home from 'pages/Home'
import Counter from 'pages/Counter'

const routes =
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='counter' component={Counter} />
  </Route>

export default routes
