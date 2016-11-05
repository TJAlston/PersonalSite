import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component {

  render () {
    return <div className='Contact'>
      <Header/>
      <div className='Headshot'>
        <img id='headshot' src={require('../images/Headshot.jpg')} height='400' width='275' />
          <div className='contactMe'>
            <h3 id='Contact'> Contact Me </h3>
            <a className='contactButton' href={require('../images/TJAlston.pdf')}>VIEW RESUME</a>
            <p>PHONE: 813-727-6091</p>
            <p><a className='email' href='mailto:tjalston82@yahoo.com'>EMAIL: TJAlston82@yahoo.com</a></p>
            <p><a className='githubC' href='https://github.com/TJAlston'>GITHUB: GITHUB.COM/TJAlston</a></p>
          </div>
        </div>
        <Footer />
      </div>
  }
}

export default Contact
