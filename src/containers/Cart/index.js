import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { CartImg, Container, ContainerCartItems } from '../Cart/styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Carrinho de Produtos" />
      <ContainerCartItems>
        <CartItems />
      </ContainerCartItems>
    </Container>
  )
}
