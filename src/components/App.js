import React from 'react'
// import { Link } from 'react-router'
import Home from './Home'
import Header from './Header'
import AboutMe from './AboutMe'
import Resume from './Resume'
// import Portfolio from './Portfolio'

class App extends React.Component {

  render () {
    return <div>
    <Header />
    <Home />
    <AboutMe />
    <Resume />
    {/* <Portfolio /> */}
    </div>
  }
}

export default App
