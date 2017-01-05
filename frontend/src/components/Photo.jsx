import React from 'react'

export default class Photo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="text-xs-center">
        <img
          className="img-fluid"
          src={`/img/photos/${this.props.id}.jpg`}
          />
      </div>
    )
  }
}
