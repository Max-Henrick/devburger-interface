import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/Logo-image.svg'
import logoRegister from '../../assets/logo-register.svg'
import Button from '../../components/Button'
import {
  Container,
  ContainerItens,
  LoginImage,
  Label,
  Input,
  ErrorMessage,
  P
} from '../../containers/Register/styles'
import api from '../../services/api'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Verifique se o e-mail é válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter 6 digitos'),
    confirmPassword: Yup.string()
      .required('A confirmação da senha é obrigatória')
      .min(6, 'A senha deve ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async registerData => {
    const response = await api.post('users', {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={logoRegister} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 26, marginBottom: 28 }}>
            Entrar
          </Button>
        </form>

        <P>
          Já possui conta? <a>Faça login</a>
        </P>
      </ContainerItens>
    </Container>
  )
}

export default Register
