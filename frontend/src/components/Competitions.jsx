import React from 'react'
import { Link } from 'react-router'
import store from '../wannabestore'

export default class Competitions extends React.Component {
  constructor() {
    super()
    this.state = {
      competitions: store.competitions
    }
  }

  render() {
    return (
      <div>
        {this.renderCompetitionsList()}
      </div>
    )
  }

  renderCompetitionsList() {
    return (
      <ul>
        {this.state.competitions.map((comp) => (
          <li key={comp.id}>
            <Link to={`competitions/${comp.id}`}>
              {comp.name} ({comp.state})
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}
