import React, { useContext, createContext, useState, useEffect } from 'react'

import Proptypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([])

  const setLocalStorage = async product => {
    await localStorage.setItem('devburger:cartData', JSON.stringify(product))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProduct.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProduct

      newCartProducts[cartIndex].quantity += 1

      setCartProduct(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProduct, product]
      setCartProduct(newCartProducts)
    }

    setLocalStorage(newCartProducts)
  }

  const deleteProductInCart = async productId => {
    const deleteProduct = cartProduct.filter(
      product => product.id !== productId
    )

    setCartProduct(deleteProduct)

    setLocalStorage(deleteProduct)
  }

  const increaseProduct = async productId => {
    const newCart = cartProduct.map(prd => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    })

    setCartProduct(newCart)

    setLocalStorage(newCart)
  }

  const decreaseProduct = async productId => {
    const cartIndex = cartProduct.findIndex(product => product.id === productId)

    if (cartProduct[cartIndex].quantity > 1) {
      const newCart = cartProduct.map(prd => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd
      })

      setCartProduct(newCart)

      setLocalStorage(newCart)
    }
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
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProduct,
        increaseProduct,
        decreaseProduct,
        deleteProductInCart
      }}
    >
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
