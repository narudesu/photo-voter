import React from 'react'

export default class Photo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="photo-card">
        <div className="img" style={{backgroundImage: `url(/img/photos/${this.props.id}.jpg)`}}>
        </div>
        <div className="info">
          <h2>{this.props.title}</h2>
        </div>
        <div className="action">
          <button>Vote</button>
          <button>Vote</button>
          <button>Vote</button>
        </div>
      </div>
    )
  }
}
