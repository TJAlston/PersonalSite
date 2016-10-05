import React from 'react'
import { Link } from 'react-router'
// import Home from './Home'
// import Header from './Header'

class App extends React.Component {

  render () {
    return <div className='App'>
      <Link className='noUnders' to='Home'>
      <h4>TJ Alston</h4></Link>
      <div className='doveplacement'>
        <div className='dove' />
        </div>
      </div>
  }
}
export default App
