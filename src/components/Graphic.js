import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router'

class Graphic extends Component {

  render () {
    return <div>
      <Header />
      <div className='graphics'>
        <div className='Row1'>
          <div id='popeye'>
            <h3>Popeye T-Shirt</h3>
            <img className='popeye' src='./images/popeye.jpeg' height='400' width='400' />
          </div>
          <div id='bubbles'>
            <h3> Queen of Suds </h3>
            <img className='bubbles' src='./images/bubbles.jpeg' height='400' width='400' />
          </div>
        </div>
        <div className='Row2'>
          <div id='lefemme'>
            <h3>3D Graphic Example</h3>
            <img className='lefemme' src='./images/lefemme.png' height='400' width='300' />
          </div>
          <div id='zeta'>
            <h3>Zeta T-Shirt </h3>
            <img className='zeta' src='./images/superzeta.jpeg' height='400' width='300' />
          </div>
        </div>
        <div className='Row3'>
        <div id='invite'>
          <h3>Graduation Invitation</h3>
          <img className='invite' src='./images/invite.jpeg' height='300' width ='400' />
        </div>
        <div id='logo'>
          <h3>Logo Design</h3>
          <img className='logo' src='./images/rwbusiness.jpeg' height='300' width='400' />
        </div>
      </div>
    </div>
  </div>
  }
}

export default Graphic
