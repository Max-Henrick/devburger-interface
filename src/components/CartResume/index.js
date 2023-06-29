import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerResume, Container } from './styles'

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

  const submitOrder = async () => {
    const order = cartProduct.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    if (order.length > 0) {
      await toast.promise(api.post('orders', { products: order }), {
        pending: 'Realizando seu pedido...',
        success: 'Pedido realizado com sucesso'
      })
    } else {
      toast.error('Verifique seu carrinho')
    }
  }

  return (
    <Container>
      <ContainerResume>
        <div className="container-top">
          <h2 className="cart-resume">Resumo do pedido</h2>
          <p className="cart-items">Itens ({cartProduct.length})</p>
          <p className="price-items">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="value-tax">
            {cartProduct && cartProduct.length > 0
              ? formatCurrency(taxValue)
              : 'R$ 0,00'}
          </p>
        </div>
        <div className="container-botton">
          <p className="cart-total">Total</p>
          <p className="price-total">
            {cartProduct && cartProduct.length > 0
              ? formatCurrency(finalPrice + taxValue)
              : 'R$ 0,00'}
          </p>
        </div>
      </ContainerResume>
      <Button style={{ marginTop: 20, width: '100%' }} onClick={submitOrder}>
        Finalizar pedido
      </Button>
    </Container>
  )
}
