import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { fromPromise } from '@apollo/client/link/utils';
import { from } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

import config from '../config';
import { getAuthToken, cleanUpSession } from '../auth';

type Client = ApolloClient<NormalizedCacheObject>;

let apolloClient: Client | null;

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const authLink = setContext(async (_, { headers = {} }) => {
  const authorization = await getAuthToken();
  return {
    headers: { ...headers, authorization },
  };
});

const errorLink = onError(
  ({ networkError, operation, forward }: ErrorResponse) => {
    if (networkError && 'statusCode' in networkError) {
      const statusCode = networkError.statusCode;
      if (statusCode === 401 || statusCode === 403) {
        const { headers } = operation.getContext();
        // eslint-disable-next-line no-console
        console.warn(
          'Unauthorized or forbidden connection to commercetools, cleaning up session...',
          networkError
        );
        cleanUpSession();
        //@ts-ignore
        return fromPromise(getAuthToken).flatMap(authorization => {
          console.log('Apollo onError.........', authorization);
          operation.setContext({ headers: { ...headers, authorization } });
          return forward(operation);
        });
      }
    }
    return null;
  }
);

const httpLink = new HttpLink({
  uri:
    process.env.VUE_APP_GRAPHQL_HTTP ||
    `${config.ct.api}/${config.ct.auth.projectKey}/graphql`,
  credentials: 'same-origin',
});

const defaultOptions = {
  query: {
    errorPolicy: 'all' as any,
  },
  mutate: {
    errorPolicy: 'all' as any,
  },
};

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions,
  });
}

export const initializeApollo = (initialState: any = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export function addApolloState(client: Client, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export const useApollo = (pageProps: any) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
};
