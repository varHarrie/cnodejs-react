import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Home from 'containers/Home'

const routes =
  <Route path='/' component={App}>
    <IndexRoute components={{main: Home, extra: Home.Tabs}} />
  </Route>

export default routes
