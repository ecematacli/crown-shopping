import React from 'react';
import { useContext } from 'react';

import AppRouter from './routers/AppRouter';
import Header from './components/header';
import { OpenedMenuContext } from './contexts/OpenedMenuContext';
import { StyledApp } from './App.styles';

const App: React.FC = () => {
  const { isMenuOpened } = useContext(OpenedMenuContext);

  return (
    <StyledApp isMenuOpened={isMenuOpened}>
      <Header />
      <div className="app">
        <AppRouter />
      </div>
    </StyledApp>
  );
};

export default App;
