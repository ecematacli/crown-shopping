import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import config from './config';
import { getCookie, clearCookie, setCookie } from './utils/cookie';

type ApolloClientType = ApolloClient<NormalizedCacheObject>;
export interface Token {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: number;
  scope: string;
  token_type: 'Bearer';
}

// const getStoredToken = () => {
//   try {
//     return cookie.getJSON('auth');
//   } catch (err) {
//     return undefined;
//   }
// };

// const setStoredToken = (token: Token) => {
//   try {
//     cookie.set('auth', token);
//   } catch (err) {
//     // Don't do anything
//   }
// };

// const clearStoredToken = () => {
//   try {
//     cookie.remove('auth');
//   } catch (err) {
//     // Don't do anything
//   }
// };

const tokenProvider = new TokenProvider(
  {
    sdkAuth: new SdkAuth(config.ct.auth),
    fetchTokenInfo: (sdkAuth: any) => sdkAuth.anonymousFlow(),
    onTokenInfoChanged: (tokenInfo: any) => setCookie('auth', tokenInfo),
  },
  getCookie('auth')
);

export const cleanUpSession = () => {
  tokenProvider.invalidateTokenInfo();
  return clearCookie('auth');
};

export const clientLogin = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  credentials: { username: string; password: string }
) => {
  clearCookie('auth');
  tokenProvider.fetchTokenInfo = (sdkAuth: any) =>
    sdkAuth.customerPasswordFlow(credentials);
  await tokenProvider.invalidateTokenInfo();
  return apolloClient
    .resetStore()
    .then(() => setCookie('isAuthenticated', true))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error on cache reset during login', error);
      return cleanUpSession();
    });
};

export const clientLogout = (apolloClient: ApolloClientType, redirect) => {
  cleanUpSession();
  return redirect().then(() => apolloClient.resetStore());
};

export const getTokenInfo = async () => {
  const token = await tokenProvider.getTokenInfo();
  return token.access_token;
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
