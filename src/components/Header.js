import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    return <div>
        <h1>TJ Alston</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/AboutMe'>About Me</Link></li>
            <li><Link to='/Resume'>Resume</Link></li>
            <li><Link to='/Portfolio'>Portfolio</Link></li>
          </ul>
        </nav>
    </div>
  }
}
export default Header
