import { Form } from 'react-bootstrap';

import useLogin from './useSignIn';
import BaseInput from '../../../../components/baseInput/BaseInput';
import { useTranslation } from '../../../../i18n';
import BaseButton from '../../../../components/baseButton/BaseButton';

const SignInForm = () => {
  const { t } = useTranslation('login');
  const {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onFormSubmit,
  } = useLogin();

  return (
    <Form onSubmit={onFormSubmit} className='form'>
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
        text={t('login').toUpperCase()}
        className='submit-btn'
      />
    </Form>
  );
};

export default SignInForm;
