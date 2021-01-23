import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import useSignUp from './useSignUp';
import Input from '../../../../components/input/Input';
import BaseButton from '../../../../components/baseButton/BaseButton';

const LoginForm = () => {
  const { t } = useTranslation('login');

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
        label={t('firstName')}
        placeholder={t('namePlaceholder')}
        value={firstName}
        onInputChange={onFirstNameChange}
      />
      <Input
        label={t('lastName')}
        placeholder={t('lastNamePlaceholder')}
        value={lastName}
        onInputChange={onLastNameChange}
      />
      <Input
        type="email"
        label={t('email')}
        placeholder={t('emailPlaceholder')}
        value={email}
        onInputChange={onEmailChange}
      />
      <Input
        type="password"
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        value={password}
        onInputChange={onPasswordChange}
      />
      <BaseButton size='lg' type='submit' text={t('signup').toUpperCase()} />
    </Form>
  );
};

export default LoginForm;
