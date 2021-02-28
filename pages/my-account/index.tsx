import { includeDefaultNamespaces, useTranslation } from '../../i18n';
import Layout from '../../components/layout/Layout';
import AccountNavigation from '../../components/accountNavigation/AccountNavigation';
import PaddedLayout from '../../components/paddedLayout/PaddedLayout';
import useScreenWidth from '../../hooks/useScreenWidth';
import { AccountPageContainer, NavigationWrapper, ContentWrapper } from './index.styles';

const LoginPage = () => {
  const { t } = useTranslation('account');
  const { isSmallScreen } = useScreenWidth();

  return (
    <Layout title={t('myAccount')}>
      <PaddedLayout padding={{ rightLeft: isSmallScreen ? '0' : '2.4' }}>
        <AccountPageContainer>
          <NavigationWrapper>
            <AccountNavigation />
          </NavigationWrapper>
          <ContentWrapper>
            THIS IS THE CONTENT OF ACCOUNT PAGE
          </ContentWrapper>
        </AccountPageContainer>
      </PaddedLayout>
    </Layout>
  );
};

export const getStaticProps = () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['account']),
  },
});

export default LoginPage;
