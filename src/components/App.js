import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
// import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div>
    <Header />
      <main className='home'>
      <div className='homeDisplay'>
        <h3 className='homeFont'>Web Designer</h3>
            <p className='homeMain'> Thank you for taking the time to view my page.  I am a Web Designer and Developer that has experience working with HTML, CSS, Javascript. I am also a recent graduate of The Iron Yard with a certification in Front-End Engineering.</p>
            </div>
            <div className='HS1' />
      </main>
    <Footer />
   </div>
  }
}

export default App
