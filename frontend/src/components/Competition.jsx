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
      <Photo />
    ))
  }

  render() {
    return (
      <div>
        <h4>
          {this.state.name} <span className="text-muted">{this.state.state}</span>
        </h4>
        <div className="row">
          <div className="col-sm-6">Heh</div>
          <div className="col-sm-6">Heh</div>
          <div className="col-sm-6">Heh</div>
        </div>
      </div>
    )
  }
}
