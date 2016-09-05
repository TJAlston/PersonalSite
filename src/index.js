import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import {
  App,
  Home,
  AboutMe,
  Resume,
  Portfolio
} from './components'

import './styles/screen.sass'

const router = (
  <Router history={browserHistory}>
      <Route path='/' component={App} />
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Resume' component={Resume} />
      <Route path='/Portfolio' component={Portfolio} />
  </Router>
)
render(router, document.getElementById('root'))
