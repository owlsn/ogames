import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../containers/app'
import Index from '../containers/index'
import { hot } from 'react-hot-loader'

const HotRoute = () => (
  <Router>
    <Switch>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)
export default hot(module)(HotRoute)
