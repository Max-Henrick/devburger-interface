import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/Logo-image.svg'
import logoRegister from '../../assets/logo-register.svg'
import { Button } from '../../components'
import {
  Container,
  ContainerItens,
  RegisterImage,
  Label,
  Input,
  ErrorMessage,
  P
} from '../../containers/Register/styles'
import api from '../../services/api'

export function Register() {
  const history = useHistory()
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
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async registerData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastrado com sucesso')
      } else if (status === 409) {
        toast.error('Email já cadastrado, Faça Login')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Tente novamente mais tarde')
    }

    setTimeout(() => {
      history.push('/login')
    }, 2000)
  }

  return (
    <Container>
      <RegisterImage src={logoRegister} alt="register-image" />
      <ContainerItens>
        <div>
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

            <Label error={errors.confirmPassword?.message}>
              Confirmar Senha
            </Label>
            <Input
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit" style={{ marginTop: 26, marginBottom: 28 }}>
              Cadastrar-se
            </Button>
          </form>

          <P>
            Já possui conta?{' '}
            <Link style={{ color: 'white' }} to="/login">
              Faça login
            </Link>
          </P>
        </div>
      </ContainerItens>
    </Container>
  )
}
