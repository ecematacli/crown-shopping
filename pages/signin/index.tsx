import { StyledLoginPage } from './index.styles';
import PaddedLayout from '../../components/paddedLayout/PaddedLayout';
import SignInForm from './components/signInForm/SignInForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import { I18nPage, includeDefaultNamespaces, useTranslation } from '../../i18n';
import Layout from '../../components/layout/Layout';
import useScreenWidth from '../../hooks/useScreenWidth';

const LoginPage: I18nPage = () => {
  const { t } = useTranslation('signin');
  const { isSmallScreen } = useScreenWidth();

  return (
    <Layout title={t('signin')}>
      <PaddedLayout>
        <StyledLoginPage isSmallScreen={isSmallScreen}>
          <div className='form-container'>
            <SignInForm />
          </div>
          <div className='form-container sign-up'>
            <SignUpForm />
          </div>
        </StyledLoginPage>
      </PaddedLayout>
    </Layout>
  );
};

export const getStaticProps = () => ({
  props: {
    namespacesRequired: includeDefaultNamespaces(['login']),
  },
});

export default LoginPage;
