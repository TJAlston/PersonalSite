import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Home,
  AboutMe,
  Portfolio,
  Contact
} from './components'

import './styles/screen.sass'

const router = (
  <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/Home' component={Home} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Portfolio' component={Portfolio} />
  </Router>
)
render(router, document.getElementById('root'))
