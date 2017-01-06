import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'
import Competitions from './components/Competitions'
import Competition from './components/Competition'

require('./style/main.scss')

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="competitions" component={Competitions} />
    <Route path="competitions/:id" component={Competition} />
  </Route>
)

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
)
