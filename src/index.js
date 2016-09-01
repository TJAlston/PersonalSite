import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Home,
  Resume,
  AboutMe,
  Portfolio
} from './components'

import './screen.sass'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/Resume' component={Resume} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Portfolio' component={Portfolio} />
    </Route>
  </Router>
), document.getElementById('root'))
