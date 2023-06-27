import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume } from '../../components'
import {
  CartImg,
  Container,
  ContainerCartItems,
  ContainerCart
} from '../Cart/styles'

export function Cart() {
  return (
    <ContainerCart>
      <Container>
        <CartImg src={CartLogo} alt="Carrinho de Produtos" />
        <ContainerCartItems>
          <CartItems />
          <CartResume />
        </ContainerCartItems>
      </Container>
    </ContainerCart>
  )
}
