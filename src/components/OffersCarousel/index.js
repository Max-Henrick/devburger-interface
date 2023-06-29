import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import Offers from '../../assets/offer.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  CategoryImg,
  Container,
  ImageCarousel,
  Button,
  ContainerItens
} from '../OffersCarousel/styles'

export function OffersCarousel() {
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const productOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatPrice: formatCurrency(product.price) }
        })

      setOffers(productOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="Foto das Ofertas" />
      <Carousel
        itemsToShow={4}
        style={{ width: '95%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItens key={product.id}>
              <ImageCarousel src={product.url} alt="Foto do produto" />
              <p>{product.name}</p>
              <p>{product.formatPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça o seu
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
