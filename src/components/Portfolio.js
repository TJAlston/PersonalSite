import React, { Component } from 'react'

class Portfolio extends Component {

  render () {
    return <div>
      <h2>TJETTA</h2>
    </div>
  }
}
// constructor () {
//   super()
//   this.state = {
//     user: 'TJAlston',
//     userData: {}
//   }
// }
//
// componentDidMount () {
//   fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
//     .then((resp) => { return resp.json() })
//     .then((data) => {
//       this.setState({ userData: data })
//     })
// }
//
// render () {
// return <div className='Repos'>
//     <Repositories url={this.state.userData.repos_url} />
//   </div>

export default Portfolio
