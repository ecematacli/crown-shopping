import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { SIGN_IN } from '../../../graphql/mutations/signIn'

type InputEvent = React.ChangeEvent<HTMLInputElement>

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signIn, { data }] = useMutation(SIGN_IN)

  const onEmailChange = (e: InputEvent) => setEmail(e.target.value)

  const onPasswordChange = (e: InputEvent) => setPassword(e.target.value)

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signIn({ variables: { draft: { email, password } } })
    console.log(data)
  }

  return {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onFormSubmit,
  }
}
