import React, { Fragment } from 'react';

import { FormContainer, SignUpFormContainer } from './index.styles';
import LoginForm from './loginForm/LoginForm';
import SignUpForm from './signupForm/SignUpForm';

const LoginPage = () => {
  return (
    <Fragment>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <SignUpFormContainer>
        <SignUpForm />
      </SignUpFormContainer>
    </Fragment>
  );
};

export default LoginPage;
