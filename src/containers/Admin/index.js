import React from 'react'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin />
      {path === '/pedidos' && <Orders />}
      {path === '/listar-produtos' && <ListProducts />}
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.object
}
