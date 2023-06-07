import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/Login-image.svg'
import Logo from '../../assets/Logo-image.svg'
import Button from '../../components/Button'
import {
  Container,
  ContainerItens,
  LoginImage,
  Label,
  Input,
  ErrorMessage,
  P
} from '../../containers/Login/styles'
import api from '../../services/api'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Verifique se o e-mail é válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async loginData => {
    const response = await api.post('login', {
      email: loginData.email,
      password: loginData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 66, marginBottom: 28 }}>
            Entrar
          </Button>
        </form>

        <P>
          Não possui conta? <a>Cadastre-se</a>
        </P>
      </ContainerItens>
    </Container>
  )
}

export default Login
