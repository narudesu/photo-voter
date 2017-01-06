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
        <div className="bottom">
          <div className="info">
            <h2>{this.props.title}</h2>
            <h2 className="votes">32</h2>
          </div>
        </div>
      </div>
    )
  }
}
