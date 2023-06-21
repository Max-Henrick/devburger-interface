import React from 'react'

import HomeLogo from '../../assets/home-image.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { HomeImg, Container } from '../Home/styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Home Image" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
