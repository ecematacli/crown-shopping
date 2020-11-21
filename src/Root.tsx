import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import store from './store/store';
import GlobalStyles from './Global.styles';
import theme from './theme';
import { LocaleContextProvider } from './contexts/LocaleContext';
import { ThemeProvider } from 'styled-components';
import App from './App';

const Root: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocaleContextProvider>
          <GlobalStyles />
          <App />
        </LocaleContextProvider>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default Root;
