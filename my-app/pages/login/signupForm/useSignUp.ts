import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SIGN_UP } from '../../../graphql/mutations/login';
import { createApolloClient } from '../../../apollo';
import { clientLogin } from '../../../auth';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const useSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signUp] = useMutation(SIGN_UP);

  const onFirstNameChange = (e: InputEvent) => setFirstName(e.target.value);

  const onLastNameChange = (e: InputEvent) => setLastName(e.target.value);

  const onEmailChange = (e: InputEvent) => setEmail(e.target.value);

  const onPasswordChange = (e: InputEvent) => setPassword(e.target.value);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await signUp({
      variables: { draft: { email, password, firstName, lastName } },
    });

    if (data) {
      clientLogin(createApolloClient(), { username: email, password });
    }
  };

  return {
    firstName,
    onFirstNameChange,
    lastName,
    onLastNameChange,
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onFormSubmit,
  };
};

export default useSignUp;
