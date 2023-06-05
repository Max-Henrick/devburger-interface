import React from 'react'

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
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>

        <P>
          Não possui conta? <a>Cadastre-se</a>
        </P>
      </ContainerItens>
    </Container>
  )
}

export default Login
