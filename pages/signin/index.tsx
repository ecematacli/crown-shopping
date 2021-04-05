import StyledLoginPage from './index.styles';
import PaddedLayout from '../../components/layouts/paddedLayout/PaddedLayout';
import SignInForm from '../../components/signInForm/SignInForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';
import { includeDefaultNamespaces, useTranslation } from '../../i18n';
import Layout from '../../components/layouts/pageLayout/Layout';

const LoginPage = () => {
  const { t } = useTranslation('signin');

  return (
    <Layout title={t('signin')}>
      <PaddedLayout>
        <StyledLoginPage>
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
