import { FormContainer, SignUpFormContainer } from './index.styles';
import AppLayout from '../../components/appLayout/AppLayout';
import SignInForm from './signInForm/SignInForm';
import SignUpForm from './signUpForm/SignUpForm';
import {
  I18nPage, includeDefaultNamespaces, useTranslation
} from '../../i18n';
import Layout from '../../components/layout';

const LoginPage: I18nPage = () => {
  const { t } = useTranslation('login')
  return (
    <Layout title={t('login')}>
      <AppLayout>
        <FormContainer>
          <SignInForm />
        </FormContainer>
        <SignUpFormContainer>
          <SignUpForm />
        </SignUpFormContainer>
      </AppLayout>
    </Layout>
  )
}

LoginPage.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces(["login"]),
  };
};
export default LoginPage;
