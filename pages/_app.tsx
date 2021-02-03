import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

import { useApollo } from '../lib/apolloClient';
import { appWithTranslation } from '../i18n';
import theme from '../styles/theme';
import GlobalStyles from '../styles/Global.styles';
import { CountryInfoContextProvider } from '../contexts/CountryInfoContext';
import {
  OpenedMenuContextProvider
} from '../contexts/OpenedMenuContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <CountryInfoContextProvider>
          <OpenedMenuContextProvider>
            <Component {...pageProps} />
          </OpenedMenuContextProvider>
        </CountryInfoContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(MyApp);

