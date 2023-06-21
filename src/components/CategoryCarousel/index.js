import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category.png'
import api from '../../services/api'
import {
  CategoryImg,
  Container,
  ImageCarousel,
  Button,
  ContainerItens
} from '../CategoryCarousel/styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategory()
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
      <CategoryImg src={Category} alt="Category carousel" />
      <Carousel
        itemsToShow={4}
        style={{ width: '95%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <ImageCarousel src={category.url} alt="Foto da categoria" />
              <Button>{category.name}</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
