import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { CardImg, Container, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <CardImg src={product.url} alt="Foto do Produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>Adicione</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
