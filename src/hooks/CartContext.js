import React, { useContext, createContext, useState, useEffect } from 'react'

import Proptypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProduct.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProduct

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProduct(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProduct, product]
      setCartProduct(newCartProducts)
    }

    await localStorage.setItem(
      'devburger:cartData',
      JSON.stringify(newCartProducts)
    )
  }

  useEffect(() => {
    const loadUserData = async () => {
      const cartInfo = await localStorage.getItem('devburger:cartData')

      if (cartInfo) {
        setCartProduct(JSON.parse(cartInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductInCart, cartProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }

  return context
}

CartProvider.propTypes = {
  children: Proptypes.node
}
