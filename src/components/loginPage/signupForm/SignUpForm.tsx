import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import useSignUp from './useSignUp';
import Input from '../../../common/components/input/Input';

const LoginForm = () => {
  const { t } = useTranslation('signup');
  const {
    firstName,
    onFirstNameChange,
    lastName,
    onLastNameChange,
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onFormSubmit,
  } = useSignUp();

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        label={t('signup:firstName')}
        placeholder={t('signup:namePlaceholder')}
        value={firstName}
        onInputChange={onFirstNameChange}
      />
      <Input
        label={t('signup:lastName')}
        placeholder={t('signup:lastNamePlaceholder')}
        value={lastName}
        onInputChange={onLastNameChange}
      />
      <Input
        type="email"
        label={t('signup:email')}
        placeholder={t('signup:emailPlaceholder')}
        value={email}
        onInputChange={onEmailChange}
      />
      <Input
        type="password"
        label={t('signup:password')}
        placeholder={t('signup:passwordPlaceholder')}
        value={password}
        onInputChange={onPasswordChange}
      />
      <Button size='lg' type='submit' block className='submit-btn'>
        {t('signup:signup').toUpperCase()}
      </Button>
    </Form>
  );
};

export default LoginForm;
