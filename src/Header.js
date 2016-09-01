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
          <li><Link to='/aboutme'>About Me</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
        </ul>
      </nav>
    </div>
  }

export default Header
