import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

class Portfolio extends Component {

  render () {
    return <div>
    <Header />
    <div className='Portfolio'>
      <div className='webDesign'>
        <h3>Web Design</h3>
        <Link to='/Web'>
          <img id='web' src={require('../images/marvel.png')} />
        </Link>
      </div>
      <div className='graphicDesign'>
      <h3>Graphic Design</h3>
      <Link to='/Graphic'>
        <img id='graphic' src={require('../images/tv.png')} />
      </Link>
      </div>
    </div>
    <Footer />
   </div>
  }
}

export default Portfolio
