import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import config from './config';

type ApolloClientType = ApolloClient<NormalizedCacheObject>;

export interface Token {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: number;
  scope: string;
  token_type: 'Bearer';
}

export const getStoredToken = () => {
  try {
    return JSON.parse(localStorage.getItem('auth'));
  } catch (err) {
    return undefined;
  }
};

export const setStoredToken = (token: Token) => {
  try {
    localStorage.setItem('auth', JSON.stringify(token));
  } catch (err) {
    // Don't do anything
  }
};

export const clearStoredToken = () => {
  try {
    localStorage.removeItem('auth');
  } catch (err) {
    // Don't do anything
  }
};

const tokenProvider = new TokenProvider(
  {
    sdkAuth: new SdkAuth(config.ct.auth),
    fetchTokenInfo: sdkAuth => sdkAuth.anonymousFlow(),
    onTokenInfoChanged: tokenInfo => setStoredToken(tokenInfo),
  },
  getStoredToken()
);

export const cleanUpSession = () => {
  tokenProvider.invalidateTokenInfo();
  return clearStoredToken();
};

export const clientLogin = async (
  apolloClient: ApolloClientType,
  credentials: { username: string; password: string }
) => {
  clearStoredToken();
  tokenProvider.fetchTokenInfo = sdkAuth =>
    sdkAuth.customerPasswordFlow(credentials);
  await tokenProvider.invalidateTokenInfo();
  return (
    apolloClient
      .resetStore()
      // .then(() => store.dispatch(setAuthenticated(true)))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error on cache reset during login', error);
        return cleanUpSession();
      })
  );
};

export const clientLogout = (apolloClient: ApolloClientType, redirect) => {
  cleanUpSession();
  return redirect().then(() => apolloClient.resetStore());
};

const buildAuthorizationHeader = async () => {
  await tokenProvider.getTokenInfo();
  const tokenInfo = await tokenProvider.getTokenInfo();
  return `${tokenInfo.token_type} ${tokenInfo.access_token}`;
};

export const getAuthToken = () =>
  buildAuthorizationHeader().catch(error => {
    // eslint-disable-next-line no-console
    console.warn(
      'Could not connect to commercetools, cleaning up session...',
      error
    );
    cleanUpSession();
    return buildAuthorizationHeader();
  });
