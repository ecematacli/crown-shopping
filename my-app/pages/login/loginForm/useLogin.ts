import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SIGN_IN } from '../../../graphql/mutations/login';
import { createApolloClient } from '../../../lib/apolloClient';
import { clientLogin } from '../../../auth';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn] = useMutation(SIGN_IN);

  const onEmailChange = (e: InputEvent) => setEmail(e.target.value);

  const onPasswordChange = (e: InputEvent) => setPassword(e.target.value);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await signIn({
        variables: { draft: { email, password } },
      });
      if (data) {
        clientLogin(createApolloClient(), { username: email, password });
      }
    } catch (e) {
      console.log('error while logging in: ', e);
    }
  };

  return {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onFormSubmit,
  };
};

export default useLogin;
