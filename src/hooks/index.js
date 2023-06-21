import React from 'react'

import Proptypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProveider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

AppProveider.propTypes = {
  children: Proptypes.node
}

export default AppProveider
