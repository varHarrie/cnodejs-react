import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Home from './pages/Home'

const routes =
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
  </Route>

export default routes
