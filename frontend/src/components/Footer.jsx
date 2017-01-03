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
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }}>
          by narudesu
        </footer>
      </header>
    )
  }
}
