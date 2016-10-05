import React, { Component } from 'react'
import Header from './Header'
// import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div className='Home'>
    <Header />
      <main>
        <h3>Web Developer</h3>
          <div className='about'>
            <p className='homeMain'> Thank you for taking the time to view my page.  I am a Front End Engineer student at the Iron Yard in St Petersburg Florida. I have experience working with HTML, CSS, Javascript.</p>
            <div className='HS1' />
        </div>
      </main>
    </div>
  }
}

export default Home
