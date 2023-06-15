import React, { useEffect } from 'react'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { CategoryImg, Container } from '../CategoryCarousel/styles'

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategory() {
      const categoryInfo = await api.get('categories')

      console.log(categoryInfo)
    }

    loadCategory()
  }, [])
  return (
    <Container>
      <CategoryImg src={Category} alt="Category carousel" />
    </Container>
  )
}

export default CategoryCarousel
