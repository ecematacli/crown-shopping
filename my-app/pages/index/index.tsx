import { Fragment } from 'react';
import Head from 'next/head';

import { useTranslation, includeDefaultNamespaces } from '../../i18n';

const HomePage = () => {
  const { t } = useTranslation('index');
  return (
    <Fragment>
      <Head>
        <title>EA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{t('welcome')}</div>
    </Fragment>
  )
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: includeDefaultNamespaces(['index'])
});

export default HomePage;