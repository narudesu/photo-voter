import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header className="container-fluid">
        <h1>Photo Voter</h1>
        <nav>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/competitions">Competitions</NavLink>
          </ul>
        </nav>
      </header>
    )
  }
}
