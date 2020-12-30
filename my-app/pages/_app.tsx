import App from 'next/app';
import cookie from 'cookie'
import { Router } from 'next/router';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useApollo } from '../lib/apolloClient';
import { appWithTranslation } from '../i18n';
import theme from '../styles/theme';
import GlobalStyles from '../styles/Global.styles';
import { CountryContextProvider } from '../contexts/CountryContext';
import {
  OpenedMenuContextProvider
} from '../contexts/OpenedMenuContext';
import { getTokenInfo } from '../auth';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <CountryContextProvider>
          <OpenedMenuContextProvider>
            <Component {...pageProps} />
          </OpenedMenuContextProvider>
        </CountryContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export const getStaticProps = async (appContext: AppContextType<Router>) => {
  const appProps = await App.getInitialProps(appContext);
  const req = appContext.ctx.req

  const auth = cookie.parse(req ? req.headers.cookie || '' : document.cookie)?.auth;

  const session = auth || await getTokenInfo()
  return { ...appProps, session }
};

export default appWithTranslation(MyApp);

