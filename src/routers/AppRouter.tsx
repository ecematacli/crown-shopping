import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from '../history'
import HomePage from '../components/homePage'
import LoginPage from '../components/login'
import ProductList from '../components/productList'

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path='/login' exact component={LoginPage} />
      <Route path='/products/:slug-:id' exact component={ProductList} />
      <Route path='/' exact component={HomePage} />
    </Switch>
  </Router>
)

export default AppRouter
