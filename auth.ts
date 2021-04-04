import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import config from './config';
import { getCookie, clearCookie, setCookie } from './common/utils/cookie';

type ApolloClientType = ApolloClient<NormalizedCacheObject>;

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
  clearCookie('auth');
  clearCookie('isAuth');
};

export const clientLogin = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  { username, password }: { username: string; password: string }
) => {
  clearCookie('auth');

  tokenProvider.fetchTokenInfo = (sdkAuth: any) =>
    sdkAuth.customerPasswordFlow({ username, password });
  tokenProvider.invalidateTokenInfo();

  await tokenProvider.invalidateTokenInfo();
  return apolloClient
    .resetStore()
    .then(() => setCookie('isAuth', true))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error on cache reset during login', error);
      return cleanUpSession();
    });
};

export const clientLogout = (
  apolloClient: ApolloClientType,
  redirect: () => void
) => {
  cleanUpSession();
  apolloClient.resetStore();
  return redirect();
};

export const getTokenInfo = async () => {
  const token = await tokenProvider.getTokenInfo();
  return token.access_token;
};

const buildAuthorizationHeader = async () => {
  const tokenInfo = await tokenProvider.getTokenInfo();
  setCookie('auth', tokenInfo);
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
