import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Home,
  AboutMe,
  Resume,
  Portfolio
} from './components'

import './styles/screen.sass'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={App} />
      <Route path='/Home' component={Home} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Resume' component={Resume} />
      <Route path='/Portfolio' component={Portfolio} />
    </Route>
  </Router>
), document.getElementById('root'))
