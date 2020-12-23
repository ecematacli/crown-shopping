import { FormContainer, SignUpFormContainer } from './index.styles'
import AppLayout from '../../components/appLayout/AppLayout'
import LoginForm from './loginForm/LoginForm'
import SignUpForm from './signupForm/SignUpForm'
import { I18nPage, includeDefaultNamespaces } from '../../i18n'

const LoginPage: I18nPage = () => {
  return (
    <AppLayout>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <SignUpFormContainer>
        <SignUpForm />
      </SignUpFormContainer>
    </AppLayout>
  )
}

LoginPage.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces(["login"]),
  };
};
export default LoginPage;
