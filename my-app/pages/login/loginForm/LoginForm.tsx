import { Button, Form } from 'react-bootstrap';

import useLogin from './useLogin';
import Input from '../../../components/input/Input';
import { useTranslation } from '../../../i18n';

const LoginForm = () => {
  const { t } = useTranslation('login')
  const { email, onEmailChange, password, onPasswordChange, onFormSubmit } = useLogin()

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="email"
        label={t('login:email')}
        placeholder={t('login:emailPlaceholder')}
        value={email}
        onInputChange={onEmailChange}
      />
      <Input
        type="password"
        label={t('login:password')}
        placeholder={t('login:passwordPlaceholder')}
        value={password}
        onInputChange={onPasswordChange}
      />
      <Button size="lg" type="submit" block className='submit-btn'>
        {t('login:login').toUpperCase()}
      </Button>
    </Form>
  )
}

export default LoginForm;
