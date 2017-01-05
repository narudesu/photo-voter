import React from 'react'

export default class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <footer
          className="container-fluid text-xs-center"
          style={{
            position: 'relative',
            bottom: 0,
            width: '100%',
            backgroundColor: 'white'
        }}>
          by narudesu
        </footer>
      </header>
    )
  }
}
