import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import store from './store/store';
import GlobalStyles from './Global.styles';
import theme from './theme';
import { CountryContextProvider } from './contexts/CountryContext';
import { OpenedMenuContextProvider } from './contexts/OpenedMenuContext';

import { ThemeProvider } from 'styled-components';
import App from './App';

const Root: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CountryContextProvider>
          <OpenedMenuContextProvider>
            <GlobalStyles />
            <App />
          </OpenedMenuContextProvider>
        </CountryContextProvider>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default Root;
