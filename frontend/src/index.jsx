import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
  </Route>
)

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
)
