import React, { useEffect, useState } from 'react'

import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, EditedButton } from './styles'

function ListProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function checkOffer(offers) {
    if (offers) {
      return <CheckBoxOutlinedIcon style={{ color: 'green' }} />
    }
    return <CancelPresentationOutlinedIcon />
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align="center">
                  {checkOffer(product.offer)}
                </TableCell>
                <TableCell align="center">
                  <img src={product.url} alt="imagem-do-produto" />
                </TableCell>
                <TableCell>
                  <EditedButton>
                    <ModeEditOutlineOutlinedIcon />
                  </EditedButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
