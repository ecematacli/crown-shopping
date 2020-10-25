import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

import { store } from './store';
import {
  setToken,
  clearAuthentication,
  setAuthenticated,
} from './store/auth/actions';
import config from './sunrise.config';

const state = store.getState();

const tokenProvider = new TokenProvider(
  {
    sdkAuth: new SdkAuth(config.ct.auth),
    fetchTokenInfo: sdkAuth => sdkAuth.anonymousFlow(),
    onTokenInfoChanged: tokenInfo => store.dispatch(setToken(tokenInfo)),
  },
  state.auth.token
);

export const cleanUpSession = () => {
  tokenProvider.invalidateTokenInfo();
  return store.dispatch(clearAuthentication());
};

export const clientLogin = async (apolloClient, credentials) => {
  await store.dispatch(clearAuthentication());
  tokenProvider.fetchTokenInfo = sdkAuth => sdkAuth.customerPasswordFlow(credentials);
  await tokenProvider.invalidateTokenInfo();
  return apolloClient
    .resetStore()
    .then(() => store.dispatch(setAuthenticated(true)))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error on cache reset during login', error);
      return cleanUpSession();
    });
};

export const clientLogout = (apolloClient, redirect) => {
  return cleanUpSession()
    .then(() => redirect())
    .then(() => apolloClient.resetStore())
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error on cache reset during logout', error);
    });
};

const buildAuthorizationHeader = () =>
  tokenProvider
    .getTokenInfo()
    .then(tokenInfo => `${tokenInfo.token_type} ${tokenInfo.access_token}`);

export const getAuthToken = () => {
  return buildAuthorizationHeader().catch(error => {
    // eslint-disable-next-line no-console
    console.warn(
      'Could not connect to commercetools, cleaning up session...',
      error
    );
    return cleanUpSession().then(() => buildAuthorizationHeader());
  });
};
