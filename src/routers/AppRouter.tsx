import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from '../history'
import HomePage from '../components/homePage'
import LoginPage from '../components/loginPage'
import ProductListPage from '../components/productListPage'

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path='/login' exact component={LoginPage} />
      <Route path='/products/:id/:slug' exact component={ProductListPage} />
      <Route path='/' exact component={HomePage} />
    </Switch>
  </Router>
)

export default AppRouter
