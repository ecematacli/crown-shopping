
import { includeDefaultNamespaces, useTranslation } from '../../i18n';
import Layout from '../../components/layout/Layout';
import AccountNavMenu from '../../components/accountNavMenu/AccountNavMenu';

const LoginPage = () => {
  const { t } = useTranslation('account');

  return (
    <Layout title={t('myAccount')}>
      <AccountNavMenu />
    </Layout>
  );
};

export const getStaticProps = () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['account']),
  },
});

export default LoginPage;
