import { FormContainer, SignUpFormContainer } from './index.styles';
import AppLayout from '../../components/appLayout/AppLayout';
import SignInForm from './components/signInForm/SignInForm';
import SignUpForm from './components/signUpForm/SignUpForm';
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

export const getStaticProps = () => {
  return {
    props: {
      namespacesRequired: includeDefaultNamespaces(["login"]),
    }
  };
};
export default LoginPage;
