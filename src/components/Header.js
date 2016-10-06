import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    return <div className='Header'>
        <nav>
        <h1>TJ Alston</h1>
          <ul>
            <li><Link className='noUnders' to='/'>Home</Link></li>
            <li><Link className='noUnders' to='/AboutMe'>About Me</Link></li>
            <li><Link className='noUnders' to='/Portfolio'>Portfolio</Link></li>
            <li><Link className='noUnders' to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
        <main>
        </main>
    </div>
  }
}
export default Header
