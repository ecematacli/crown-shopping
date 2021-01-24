import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import useSignUp from './useSignUp';
import BaseInput from '../../../../components/baseInput/BaseInput';
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
    <Form onSubmit={onFormSubmit} className='form'>
      <BaseInput
        label={t('firstName')}
        placeholder={t('namePlaceholder')}
        value={firstName}
        onChange={onFirstNameChange}
      />
      <BaseInput
        label={t('lastName')}
        placeholder={t('lastNamePlaceholder')}
        value={lastName}
        onChange={onLastNameChange}
      />
      <BaseInput
        type='email'
        label={t('email')}
        placeholder={t('emailPlaceholder')}
        value={email}
        onChange={onEmailChange}
      />
      <BaseInput
        type='password'
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        value={password}
        onChange={onPasswordChange}
      />
      <BaseButton
        size='lg'
        type='submit'
        text={t('signup').toUpperCase()}
        className='submit-btn'
      />
    </Form>
  );
};

export default LoginForm;
