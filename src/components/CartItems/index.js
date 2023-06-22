import React from 'react'

import EmptycartImg from '../../assets/Carrinho-vazio.jpg'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Main, EmptyCart } from './styles'

export function CartItems() {
  const { cartProduct } = useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProduct && cartProduct.length > 0 ? (
        cartProduct.map(product => (
          <Main key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="container-quantity">
              <button>-</button>
              <p>{product.quantity}</p>
              <button>+</button>
            </div>
            <p style={{ paddingLeft: 35 }}>
              {formatCurrency(product.quantity * product.price)}
            </p>
          </Main>
        ))
      ) : (
        <EmptyCart>
          <img src={EmptycartImg} />
        </EmptyCart>
      )}
    </Container>
  )
}
