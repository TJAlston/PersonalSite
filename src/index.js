import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  AboutMe,
  Portfolio,
  Contact,
  Web,
  Graphic
} from './components'

import './styles/screen.sass'

const router = (
  <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/Web' component={Web} />
      <Route path='/Graphic' component={Graphic} />
  </Router>
)
render(router, document.getElementById('root'))
