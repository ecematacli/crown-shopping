import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './i18n';
import apolloClient from './apollo';
import store from './store/store';
import App from './App';
import Loading from './components/loading/Loading';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Suspense>,
  document.getElementById('root')
);
