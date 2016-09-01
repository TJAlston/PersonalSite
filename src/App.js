import React from 'react'
import './style.sass'
import { Link } from 'react-router'
import Home from './Home'

class App extends React.Component {

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
      <Home />
    </div>
  }
}

export default App
