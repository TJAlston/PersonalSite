import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

class Web extends Component {

  render () {
    return <div>
    <Header />
    <div className='Web'>
      <div className='img1'>
        <a className='image1' href='#marvel'>
        <h3>Marvel Comics</h3>
        <img className='marvel' src={require('../images/marvel.png')} height='250' width='400'/>
        <p>Fun Web App made from Marvels API.</p>
        </a>
      </div>
      <div className= 'modal' id='marvel'>
        <div className='container'>
          <p>Marvel Comics</p>
          <hr />
          <img className='marvel' src={require('../images/marvel.png')} height='350' width='500'/>
          <a href='#modal-close'>Close</a>
        </div>
      </div>
      <div className='img2'>
        <a className='image2' href='#one'>
        <h3>One List</h3>
        <img className='one' src={require('../images/onelist.png')} height='250' width='400'/>
        <p>My modern TO DO List</p>
        </a>
      </div>
        <div className= 'modal' id='one'>
          <div className='container'>
            <p>One List</p>
            <hr />
            <img className='one' src={require('../images/onelist.png')}height='350' width='500'/>
            <a href='#modal-close'>Close</a>
          </div>
        </div>
      <div className='img3'>
        <a className='image3' href='#bomb'>
          <h3>Bomb Sniffer</h3>
          <img className='bomb' src={require('../images/bombsniffer.png')} height='250' width='400'/>
          <p>A fun version of Minesweeper</p>
        </a>
      </div>
        <div className= 'modal' id='bomb'>
          <div className='container'>
            <p>Bomb Sniffer</p>
            <hr />
            <img className='bomb' src={require('../images/bombsniffer.png')} height='350' width='500'/>
            <a href='#modal-close'>Close</a>
          </div>
        </div>
      <div className='img4'>
        <a className='image4' href='#op'>
          <h3>One Piece Planet</h3>
          <img className='op' src={require('../images/opsite.png')} height='250' width='400'/>
          <p>My Fansite for the Anime One Piece</p>
        </a>
      </div>
        <div className= 'modal' id='op'>
          <div className='container'>
            <p>One Piece Planet</p>
            <hr />
            <img className='op' src={require('../images/opsite.png')} height='350' width='500'/>
            <a href='#modal-close'>Close</a>
          </div>
        </div>
    </div>
    <Footer />
   </div>
  }
}

export default Web
