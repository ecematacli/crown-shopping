import React, { Fragment } from 'react'

import AppRouter from './routers/AppRouter'
import Header from './components/header/Header'
import AppLayout from './common/components/appLayout/AppLayout'
import CategoriesMenu from './components/categoriesMenu'

const App: React.FC = () => (
  <Fragment>
    <AppLayout>
      <Header />
    </AppLayout>
    <CategoriesMenu />
    <AppRouter />
  </Fragment>
)

export default App
