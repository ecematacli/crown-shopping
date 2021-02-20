import { includeDefaultNamespaces, useTranslation } from '../../i18n';
import Layout from '../../components/layout/Layout';
import AccountNavigation from '../../components/accountNavigation/AccountNavigation';

const LoginPage = () => {
  const { t } = useTranslation('account');

  return (
    <Layout title={t('myAccount')}>
      <AccountNavigation />
    </Layout>
  );
};

export const getStaticProps = () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['account']),
  },
});

export default LoginPage;
