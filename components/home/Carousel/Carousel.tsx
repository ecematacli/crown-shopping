import React from 'react';
import { Carousel } from 'react-bootstrap';

import carouselData from './carouselData';
import { StyledCarousel } from './Carousel.styles';

const HomePageCarousel = () => (
  <StyledCarousel>
    {carouselData.map(({ id, alt }) => (
      <Carousel.Item key={alt} className='x'>
        <img
          className='carousel-image'
          alt={alt}
          src={`/images/carousel-${id}.jpeg`}
        />
      </Carousel.Item>
    ))}
  </StyledCarousel>
);

export default HomePageCarousel;
