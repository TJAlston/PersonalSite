import React, { Component } from 'react'
import { Link } from 'react-router'

class Footer extends Component {

  render () {
    return <div>
      <main id='footer'>
        <div className='buttons'>
          <h3 className='footerFont'>Follow Me:</h3>
            <a href='https://www.linkedin.com/in/tamekajalston'>
            <div className='linkedIn' />
            </a>
            <a href='https://twitter.com/Mirage_Music'>
            <div className='twitter' />
            </a>
            <a href='https://www.instagram.com/tamekaj.alston/'>
            <div className='instagram' />
            </a>
            <a href='https://github.com/TJAlston'>
            <div className='github' />
            </a>
        </div>
          <Link to='/Contact'>
            <div id='copyRight'>
              <div className='copyright' />
              <h3 className='footerFont'> Tameka J. Alston</h3>
            </div>
          </Link>
      </main>
    </div>
  }
}
export default Footer
