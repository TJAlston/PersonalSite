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
          <img id='web' src='./images/marvel.png' height='250' width='400' />
        </Link>
      </div>
      <div className='graphicDesign'>
      <h3>Graphic Design</h3>
      <Link to='/Graphic'>
        <img id='graphic' src='./images/tv.png' height='250' width='400' />
      </Link>
      </div>
    </div>
    <Footer />
   </div>
  }
}

export default Portfolio
