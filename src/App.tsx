import React, { Fragment } from 'react';
import { useContext } from 'react';

import AppRouter from './routers/AppRouter';
import Header from './components/header/Header';
import { OpenedMenuContext } from './contexts/OpenedMenuContext';
import CategoriesMenu from './components/categoriesMenu';
import { StyledApp } from './App.styles';

const App: React.FC = () => {
  const { isMenuOpened } = useContext(OpenedMenuContext);

  return (
    <Fragment>
      <Header />
      <CategoriesMenu />
      <StyledApp isMenuOpened={isMenuOpened}>
        <AppRouter />
      </StyledApp>
    </Fragment>
  );
};

export default App;
