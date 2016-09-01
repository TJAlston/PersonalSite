import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Link } from 'react-router'

class Header extends Component

  render (){
    return <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Aboutme'>About Me</Link></li>
          <li><Link to='/Resume'>Resume</Link></li>
          <li><Link to='/Portfolio'>Portfolio</Link></li>
        </ul>
      </nav>
    </div>
  }

export default Header
