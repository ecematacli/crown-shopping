import { GetServerSideProps } from 'next';

import { includeDefaultNamespaces, useTranslation } from '../../i18n';
import Layout from '../../components/layouts/pageLayout/Layout';
import PaddedLayout from '../../components/layouts/paddedLayout/PaddedLayout';
import AccountPageContainer, { NavigationWrapper, ContentWrapper } from './index.styles';
import useScreenWidth from '../../common/hooks/useScreenWidth';
import AccountNavigation from '../../components/account/accountNavigation/AccountNavigation';
import AccountContent from '../../components/account/accountContent/AccountContent';
interface Props {
  subpath: { name: string };
}

const AccountPage = ({ subpath }: Props) => {
  const { t } = useTranslation('my-account');
  const { isSmallScreen } = useScreenWidth();

  return (
    <Layout title={t('myAccount')}>
      <PaddedLayout padding={{ rightLeft: isSmallScreen ? '0' : '2.4' }}>
        <AccountPageContainer>
          <NavigationWrapper>
            <AccountNavigation />
          </NavigationWrapper>
          <ContentWrapper>
            <AccountContent subpath={subpath} />
          </ContentWrapper>
        </AccountPageContainer>
      </PaddedLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['my-account']),
    subpath: { name: query.subpath || '' },
  }
});

export default AccountPage;
