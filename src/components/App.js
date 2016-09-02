import React from 'react'
// import { Link } from 'react-router'
import Home from './Home'
import Header from './Header'
import AboutMe from './AboutMe'

class App extends React.Component {

  render () {
    return <div>
    <Header />
    <Home />
    <AboutMe />
    </div>
  }
}

export default App
