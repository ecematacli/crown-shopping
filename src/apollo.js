import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink } from '@apollo/client';
import { fromPromise } from '@apollo/client/link/utils/fromPromise';
import { onError } from '@apollo/client/link/error';
import { from } from '@apollo/client'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';

import config from './sunrise.config';
import { getAuthToken, cleanUpSession } from './auth';
import introspectionQueryResultData from './graphql-fragments.json';

const authLink = setContext(async (_, { headers = {} }) => {
  const authorization = await getAuthToken();
  return {
    headers: { ...headers, authorization },
  };
});

const errorLink = onError(async({ networkError, operation, forward }) => {
  const statusCode = networkError?.statusCode;
  if (statusCode === 401 || statusCode === 403) {
    const { headers } = operation.getContext();
    // eslint-disable-next-line no-console
    console.warn(
      'Unauthorized or forbidden connection, cleaning up session...',
      networkError
    );
    cleanUpSession();
    const authorization = await getAuthToken();
    return fromPromise(authorization.flatMap(
      authorization => {
        operation.setContext({ headers: { ...headers, authorization } });
        return forward(operation);
      }
    ))
  }
  return null;
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP ||
  `${config.ct.api}/${config.ct.auth.projectKey}/graphql`,
})

const apolloClient = new ApolloClient({
  cache: new InMemoryCache({ fragmentMatcher }),
  link: authLink.concat(httpLink)  
  // link: from([errorLink, authLink, httpLink])
});

export default apolloClient;
