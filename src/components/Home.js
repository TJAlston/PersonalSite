import React, { Component } from 'react'
import Header from './Header'

class Home extends Component {

  render () {
    return <div>
    <Header />
    <main>
      <div className='Home'>
      <h2>Web Developer and Graphic Designer</h2>
        <div className='about'>
          <p className='homeMain'> Thank you for taking the time to view my page.  I am a Front End Engineer student at the Iron Yard in St Petersburg Florida. I have experience working with HTML, CSS, Javascript.</p>
          <div className='HS1' />
        </div>
      </div>
    </main>
    </div>
  }
}

export default Home
