import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import store from './store/store';
import GlobalStyles from './Global.styles';
import theme from './theme';
import { AppContainer, AppWrapper } from './App.styles';
import Header from './components/header/Header';
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyles />
          <AppWrapper>
            <Header />
            <AppRouter />
          </AppWrapper>
        </AppContainer>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default App;
