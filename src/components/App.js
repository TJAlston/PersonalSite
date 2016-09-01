import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

class App extends React.Component {

  render () {
    return <div>
    <header>
      <h1>TJ Alston</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/AboutMe'>About Me</Link></li>
          <li><Link to='/Resume'>Resume</Link></li>
          <li><Link to='/Portfolio'>Portfolio</Link></li>
        </ul>
      </nav>
    </header>
    <Home />
    </div>
  }
}

export default App
