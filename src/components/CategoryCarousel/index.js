import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { CategoryImg, Container } from '../CategoryCarousel/styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategory()
  }, [])
  return (
    <Container>
      <CategoryImg src={Category} alt="Category carousel" />
      <Carousel itemsToShow={4}>
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <img src={category.url} alt="Foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
