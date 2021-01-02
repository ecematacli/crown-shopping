import { FormContainer, SignUpFormContainer } from './index.styles';
import PaddedLayout from '../../components/paddedLayout/PaddedLayout';
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
      <PaddedLayout>
        <FormContainer>
          <SignInForm />
        </FormContainer>
        <SignUpFormContainer>
          <SignUpForm />
        </SignUpFormContainer>
      </PaddedLayout>
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
