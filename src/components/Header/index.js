import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart-header-img.png'
import Person from '../../assets/person-image.png'
import { useUser } from '../../hooks/UserContext'
import {
  ContainerHeader,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  ExitLink,
  Line
} from './styles'

export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  const { userData, logout } = useUser()
  const { name } = userData

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <ContainerHeader>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink
          onClick={() => push('/carrinho')}
          isActive={pathname === '/carrinho'}
        >
          <img src={Cart} alt="Imagem carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="Imagem carrinho" />
        </PageLink>
        <ContainerText>
          <p>Olá! {name}</p>
          <ExitLink onClick={logoutUser}>Sair</ExitLink>
        </ContainerText>
      </ContainerRight>
    </ContainerHeader>
  )
}
