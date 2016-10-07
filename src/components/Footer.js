import React, { Component } from 'react'
import { Link } from 'react-router'

class Footer extends Component {

  render () {
    return <div>
      <main id='footer'>
        <div className='buttons'>
          <h3 className='footerFont'>Follow Me</h3>
            <div className='linkedIn' />
            <div className='twitter' />
            <div className='instagram' />
            <div className='github' />
        </div>
          <div id='copyRight'>
            <div className='copyright' />
            <h3 className='footerFont'> Tameka J. Alston</h3>
          </div>
      </main>
    </div>
  }
}
export default Footer
