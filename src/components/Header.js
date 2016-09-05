import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    // const { children } = this.props
    return <div className='Header'>
        <h1>TJ Alston</h1>
        <nav>
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/AboutMe'>About Me</Link></li>
            <li><Link to='/Resume'>Resume</Link></li>
            <li><Link to='/Portfolio'>Portfolio</Link></li>
          </ul>
        </nav>
        <main>
          {/* {this.props.children} */}
        </main>
    </div>
  }
}
export default Header
