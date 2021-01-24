import React from 'react'
import { Carousel } from 'react-bootstrap'

import carouselData from './carouselData'
import { StyledCarousel } from './Carousel.styles'

const HomePageCarousel = () => {
  return (
    <StyledCarousel>
      {carouselData.map(({ alt, imageSrc }) => (
        <Carousel.Item key={alt}>
          <img className='d-block w-100' src={imageSrc} alt={alt} />
        </Carousel.Item>
      ))}
    </StyledCarousel>
  )
}

export default HomePageCarousel
