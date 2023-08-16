import React from 'react'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin />
      {path === '/pedidos' && <Orders />}
      {path === '/listar-produtos' && <ListProducts />}
      {path === '/novo-produto' && <NewProduct />}
      {path === '/editar-produto' && <EditProduct />}
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.object
}
