import React from 'react'

import EmptycartImg from '../../assets/Carrinho-vazio.jpg'
import Trashimg from '../../assets/trash.svg'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Header,
  Main,
  EmptyCart,
  Trash,
  TrashButton
} from './styles'

export function CartItems() {
  const { cartProduct, increaseProduct, decreaseProduct, deleteProductInCart } =
    useCart()
  return (
    <div>
      <Container>
        <Header>
          <p></p>
          <p>Itens</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p style={{ paddingLeft: 35 }}>Total</p>
          <p></p>
        </Header>
        {cartProduct && cartProduct.length > 0 ? (
          cartProduct.map(product => (
            <Main key={product.id}>
              <img src={product.url} />
              <p>{product.name}</p>
              <p>{formatCurrency(product.price)}</p>
              <div className="container-quantity">
                <button onClick={() => decreaseProduct(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => increaseProduct(product.id)}>+</button>
              </div>
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <TrashButton>
                <Trash
                  src={Trashimg}
                  onClick={() => deleteProductInCart(product.id)}
                />
              </TrashButton>
            </Main>
          ))
        ) : (
          <EmptyCart>
            <img src={EmptycartImg}></img>
          </EmptyCart>
        )}
      </Container>
    </div>
  )
}
