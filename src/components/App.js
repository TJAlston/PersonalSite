import React from 'react'
import { Link } from 'react-router'
// import Home from './Home'
// import Header from './Header'

class App extends React.Component {

  render () {
    return <div>
      <Link to='Home'>
      <h4>TJ Alston</h4></Link>

    {/* <Header />
    <Home /> */}
    </div>
  }
}

export default App
