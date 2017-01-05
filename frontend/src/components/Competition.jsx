import React from 'react'
import Photo from './Photo'
import store from '../wannabestore'

export default class Competition extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const comp_id = this.props.params.id
    this.setState(store.competitions.find(c => c.id == comp_id))
  }

  renderPhotos() {
    return this.state.photos.map(p => (
      <Photo key={p.id} id={p.id}/>
    ))
  }

  render() {
    return (
      <div>
        <h4>
          {this.state.name} <span className="text-muted">{this.state.state}</span>
        </h4>
        <div className="row">
        {this.renderPhotos().map(photo => (
          <div className="col-md-6 col-lg-4 col-xl-3" key={photo.key}>{photo}</div>
        ))}
        </div>
      </div>
    )
  }
}
