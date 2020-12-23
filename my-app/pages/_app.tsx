import App from 'next/app';
import { useContext } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { appWithTranslation } from '../i18n';
import theme from '../styles/theme';
import GlobalStyles from '../styles/Global.styles';
import { StyledApp } from '../styles/App.styles';
import { useApollo } from '../apollo';
import { CountryContextProvider } from '../contexts/CountryContext';
import {
  OpenedMenuContextProvider,
  OpenedMenuContext,
} from '../contexts/OpenedMenuContext';
import Header from '../components/header';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const { isMenuOpened } = useContext(OpenedMenuContext);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CountryContextProvider>
          <OpenedMenuContextProvider>
            <StyledApp isMenuOpened={isMenuOpened}>
              <GlobalStyles />
              <Header />
              <div className='app'>
                <Component {...pageProps} />
              </div>
            </StyledApp>
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
