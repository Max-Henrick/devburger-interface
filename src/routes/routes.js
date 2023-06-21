import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Login, Register, Product } from '../containers'
import PrivateRoutes from './private-routes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoutes exact component={Home} path="/" />
        <PrivateRoutes component={Product} path="/produtos" />
      </Switch>
    </Router>
  )
}

export default Routes
