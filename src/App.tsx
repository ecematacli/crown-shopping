import React, { Fragment } from 'react';

import { AppContainer, AppWrapper } from './App.styles';
import AppRouter from './routers/AppRouter';
import Header from './components/header/Header';
import CategoriesMenu from './components/categoriesMenu/CategoriesMenu';

const App: React.FC = () => (
  <Fragment>
    <AppContainer>
      <AppWrapper>
        <Header />
      </AppWrapper>
    </AppContainer>
    <CategoriesMenu />
    <AppContainer>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </AppContainer>
  </Fragment>
);

export default App;
