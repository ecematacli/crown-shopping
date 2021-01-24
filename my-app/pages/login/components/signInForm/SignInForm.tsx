import { Form } from 'react-bootstrap';

import useLogin from './useSignIn';
import Input from '../../../../components/input/Input';
import { useTranslation } from '../../../../i18n';
import BaseButton from '../../../../components/baseButton/BaseButton';

const SignInForm = () => {
  const { t } = useTranslation('login')
  const { email, onEmailChange, password, onPasswordChange, onFormSubmit } = useLogin();

  return (
    <Form onSubmit={onFormSubmit}>
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
      <BaseButton size="lg" type="submit" text={t('login').toUpperCase()} />
    </Form>
  )
}

export default SignInForm;
