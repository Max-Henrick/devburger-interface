import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/logo-index.svg'
import api from '../../services/api'
import {
  ProductImg,
  Container,
  CategoryButton,
  ContainerItens
} from '../Product/styles'

function Product() {
  const [categories, setCategories] = useState([])

  const [isActiveCategory, setIsActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategory)
    }

    loadCategory()
  }, [])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="Home Image" />
      <ContainerItens>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={isActiveCategory === category.id}
              onClick={() => {
                setIsActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </ContainerItens>
    </Container>
  )
}

export default Product
