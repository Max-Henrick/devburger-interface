import React from 'react'
import { useForm } from 'react-hook-form'

import LoginImg from '../../assets/Login-image.svg'
import Logo from '../../assets/Logo-image.svg'
import {
  Container,
  ContainerItens,
  LoginImage,
  Label,
  Input,
  Button,
  P
} from '../../containers/Login/styles'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type="submit">Entrar</Button>
        </form>

        <P>
          Não possui conta? <a>Cadastre-se</a>
        </P>
      </ContainerItens>
    </Container>
  )
}

export default Login
