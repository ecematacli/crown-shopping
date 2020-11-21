import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import useSignUp from './useSignUp';

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
      <Form.Group className="form-group">
        <Form.Label>{t('signup:firstName')}</Form.Label>
        <Form.Control
          placeholder={t('signup:namePlaceholder')}
          value={firstName}
          onChange={onFirstNameChange}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>{t('signup:lastName')}</Form.Label>
        <Form.Control
          placeholder={t('signup:lastNamePlaceholder')}
          value={lastName}
          onChange={onLastNameChange}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>{t('signup:email')}</Form.Label>
        <Form.Control
          type="email"
          placeholder={t('signup:emailPlaceholder')}
          value={email}
          onChange={onEmailChange}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>{t('signup:password')}</Form.Label>
        <Form.Control
          type="password"
          placeholder={t('signup:passwordPlaceholder')}
          value={password}
          onChange={onPasswordChange}
        />
      </Form.Group>
      <Button size='lg' type='submit' block className='submit-btn'>
        {t('signup:signup').toUpperCase()}
      </Button>
    </Form>
  );
};

export default LoginForm;
