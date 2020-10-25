import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import apolloClient from './apollo';
import { store, persistor } from './store';


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
