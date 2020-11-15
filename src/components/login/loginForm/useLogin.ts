import { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e: InputEvent) => setEmail(e.target.value);
  const onPasswordChange = (e: InputEvent) => setPassword(e.target.value);

  return {
    email,
    onEmailChange,
    password,
    onPasswordChange,
  };
};
