import React from 'react'

import HomeLogo from '../../assets/home-image.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { HomeImg, Container } from '../Home/styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Home Image" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
