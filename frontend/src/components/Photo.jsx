import React from 'react'

export default class Photo extends React.Component {
  constructor() {
    super()
  }

  handleViewPhoto(e) {
    this.props.viewPhoto(this.props.id)
  }

  handleAddToBasket(e) {
    this.props.addToBasket(this.props.id)
    e.stopPropagation()
  }

  render() {
    return (
      <div className="photo-card" onClick={this.handleViewPhoto.bind(this)}>
        <div
        className="img"
        style={{backgroundImage: `url(/img/photos/${this.props.id}.jpg)`}}
        onClick={this.handleViewPhoto.bind(this)}>
        </div>
        <div className="bottom">
          <div className="info">
            <h2>{this.props.title}</h2>
            <h2 className="votes">32</h2>
          </div>
        </div>
        <div className="actions">
          <i className="fa fa-plus-square" onClick={this.handleAddToBasket.bind(this)}></i>
        </div>
      </div>
    )
  }
}
