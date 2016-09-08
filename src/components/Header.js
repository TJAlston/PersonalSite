import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    // const { children } = this.props
    return <div className='Header'>
        <h1>TJ Alston</h1>
        <nav>
          <ul>
            <li><Link className='noUnders' to='/Home'>Home</Link></li>
            <li><Link className='noUnders' to='/AboutMe'>About Me</Link></li>
            <li><Link className='noUnders' to='/Resume'>Resume</Link></li>
            <li><Link className='noUnders' to='/Portfolio'>Portfolio</Link></li>
          </ul>
        </nav>
        <main>
          {/* {this.props.children} */}
        </main>
    </div>
  }
}
export default Header
