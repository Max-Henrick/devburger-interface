import React, { useState, useEffect } from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerResume } from './styles'

export function CartResume() {
  const { cartProduct } = useCart()
  const [finalPrice, setFinalPrice] = useState(0)
  const [taxValue] = useState(10)

  useEffect(() => {
    const sumValues = cartProduct.reduce((acumulator, current) => {
      return current.price * current.quantity + acumulator
    }, 0)

    setFinalPrice(sumValues)
  }, [cartProduct])

  return (
    <div>
      <ContainerResume>
        <div className="container-top">
          <h2 className="cart-resume">Resumo do pedido</h2>
          <p className="cart-items">Itens ({cartProduct.length})</p>
          <p className="price-items">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="value-tax">{formatCurrency(taxValue)}</p>
        </div>
        <div className="container-botton">
          <p className="cart-total">Total</p>
          <p className="price-total">{formatCurrency(finalPrice + taxValue)}</p>
        </div>
      </ContainerResume>
      <Button style={{ marginTop: 20, width: '100%' }}>Finalizar pedido</Button>
    </div>
  )
}
