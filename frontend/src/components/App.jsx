import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
