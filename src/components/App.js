import React, { Component } from 'react'
import Header from './Header'
// import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div className='Home'>
    <Header />
      <main className='home'>
      <div className='homeDisplay'>
        <h3 className='homeFont'>Web Designer</h3>
            <p className='homeMain'> Thank you for taking the time to view my page.  I am a Front End Engineer student at the Iron Yard in St Petersburg Florida. I have experience working with HTML, CSS, Javascript.</p>
            </div>
            <div className='HS1' />
      </main>
    </div>
  }
}

export default App
