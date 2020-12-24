import App from 'next/app';
import { Router } from 'next/router';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { useApollo } from '../lib/apolloClient';
import { appWithTranslation } from '../i18n';
import theme from '../styles/theme';
import GlobalStyles from '../styles/Global.styles';
import { CountryContextProvider } from '../contexts/CountryContext';
import {
  OpenedMenuContextProvider
} from '../contexts/OpenedMenuContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CountryContextProvider>
          <GlobalStyles />
          <OpenedMenuContextProvider>
            <Component {...pageProps} />
          </OpenedMenuContextProvider>
        </CountryContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
