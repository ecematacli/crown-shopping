import { Form } from 'react-bootstrap';

import useLogin from './useSignIn';
import BaseInput from '../../../../components/baseInput/BaseInput';
import { useTranslation } from '../../../../i18n';
import BaseButton from '../../../../components/baseButton/BaseButton';

const SignInForm = () => {
  const { t } = useTranslation('signin');
  const {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onFormSubmit,
  } = useLogin();

  return (
    <div>
      <h3 className='form-title'>{t('signin')}</h3>
      <Form onSubmit={onFormSubmit} className='form sign-in-form'>
        <div className='input-wrapper'>
          <BaseInput
            type='email'
            className='custom-input'
            label={t('email')}
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={onEmailChange}
          />
          <BaseInput
            type='password'
            className='custom-input'
            label={t('password')}
            placeholder={t('passwordPlaceholder')}
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <BaseButton
          size='lg'
          type='submit'
          text={t('login').toUpperCase()}
          className='submit-btn'
        />
      </Form>
    </div>
  );
};

export default SignInForm;
