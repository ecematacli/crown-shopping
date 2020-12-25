import { FormContainer, SignUpFormContainer } from './index.styles'
import AppLayout from '../../components/appLayout/AppLayout'
import LoginForm from './loginForm/LoginForm'
import SignUpForm from './signupForm/SignUpForm'
import { I18nPage, includeDefaultNamespaces } from '../../i18n'
import Layout from '../../components/layout'

const LoginPage: I18nPage = () => {
  return (
    <Layout title="Sign In">
      <AppLayout>
        <FormContainer>
          <LoginForm />
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
