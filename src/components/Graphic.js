import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Graphic extends Component {

  render () {
    return <div>
      <Header />
      <div className='graphics'>
        <div className='Row1'>
          <div id='popeye'>
            <h3>Popeye T-Shirt</h3>
            <img className='popeye' src={(require('../images/popeye.jpeg'))} height='400' width='400' />
          </div>
          <div id='bubbles'>
            <h3> Queen of Suds </h3>
            <img className='bubbles' src={require('../images/bubbles.jpeg')} height='400' width='400' />
          </div>
        </div>
        <div className='Row2'>
          <div id='lefemme'>
            <h3>3D Graphics</h3>
            <img className='lefemme' src={require('../images/lefemme.png')} height='400' width='300' />
          </div>
          <div id='zeta'>
            <h3>Zeta T-Shirt </h3>
            <img className='zeta' src={require('../images/superzeta.jpeg')} height='400' width='300' />
          </div>
        </div>
        <div className='Row3'>
        <div id='invite'>
          <h3>Graduation Invitation</h3>
          <img className='invite' src={require('../images/invite.jpeg')} height='300' width ='400' />
        </div>
        <div id='logo'>
          <h3>Logo Design</h3>
          <img className='logo' src={require('../images/rwbusiness.jpeg')} height='300' width='400' />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  }
}

export default Graphic
