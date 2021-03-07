import { useTranslation } from '../../../i18n';
import Layout from '../../layout/Layout';
import AccountNavigation from '../accountNavigation/AccountNavigation';
import PaddedLayout from '../../paddedLayout/PaddedLayout';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { AccountPageContainer, NavigationWrapper, ContentWrapper } from './AccountPageWrapper.styles';

interface Props {
  subpath: string;
  children: React.ReactNode;
}

const AccountPageWrapper = ({ subpath, children }: Props) => {
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation('my-account');

  const path = t('myAccount');
  return (
    <Layout title={`${path} | ${subpath}`}>
      <PaddedLayout padding={{ rightLeft: isSmallScreen ? '0' : '2.4' }}>
        <AccountPageContainer>
          <NavigationWrapper>
            <AccountNavigation />
          </NavigationWrapper>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </AccountPageContainer>
      </PaddedLayout>
    </Layout>
  );
};

export default AccountPageWrapper;
