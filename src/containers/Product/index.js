import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import ProductLogo from '../../assets/logo-index.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  ProductImg,
  Container,
  CategoryButton,
  ContainerItens,
  ContainerCard
} from '../Product/styles'

export function Product({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [isActiveCategory, setIsActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategory)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      const formatPrice = data.map(product => {
        return { ...product, formatPrice: formatCurrency(product.price) }
      })

      setProducts(formatPrice)
    }

    loadProducts()
    loadCategory()
  }, [])

  useEffect(() => {
    if (isActiveCategory === 0) {
      setfilteredProducts(products)
    } else {
      const filteredProducts = products.filter(
        product => product.category_id === isActiveCategory
      )
      setfilteredProducts(filteredProducts)
    }
  }, [isActiveCategory, products])

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
      <ContainerCard>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerCard>
    </Container>
  )
}

Product.propTypes = {
  location: PropTypes.object
}
