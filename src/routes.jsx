import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Topics from 'containers/Topics'
import Topic from 'containers/Topic'

const routes =
  <Route path='/' component={App}>
    <IndexRoute components={Topics} />
    <Route path='/topics/:topicId' component={Topic} />
  </Route>

export default routes
