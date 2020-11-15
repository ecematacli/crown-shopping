import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { FormContainer } from './LoginForm.styles'
import useLogin from './useLogin'

const LoginForm = () => {
  const { t } = useTranslation('login')
  const { email, onEmailChange, password, onPasswordChange, onFormSubmit } = useLogin()

  return (
    <FormContainer>
      <Form onSubmit={onFormSubmit}>
        <Form.Group controlId='formBasicEmail' className='form-group'>
          <Form.Label>{t('login:email')}</Form.Label>
          <Form.Control
            type='email'
            placeholder={t('login:emailPlaceholder')}
            value={email}
            onChange={onEmailChange}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword' className='form-group'>
          <Form.Label>{t('login:email')}</Form.Label>
          <Form.Control
            type='password'
            placeholder={t('login:passwordPlaceholder')}
            value={password}
            onChange={onPasswordChange}
          />
        </Form.Group>
        <Button size='lg' type='submit' block className='submit-btn'>
          {t('login:login').toUpperCase()}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginForm
