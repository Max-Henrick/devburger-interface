import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume } from '../../components'
import {
  CartImg,
  Container,
  ContainerCartItems,
  Footer,
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
      <Footer>
        <p>Todos os Dereitos reservados.</p>
        <p>Projeto realizado por Max Henrique &reg;</p>
      </Footer>
    </ContainerCart>
  )
}
