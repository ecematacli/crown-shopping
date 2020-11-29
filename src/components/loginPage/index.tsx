import React from 'react'

import { FormContainer, SignUpFormContainer } from './index.styles'
import AppLayout from '../../common/components/appLayout/AppLayout'
import LoginForm from './loginForm/LoginForm'
import SignUpForm from './signupForm/SignUpForm'

const LoginPage: React.FC = () => {
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

export default LoginPage
