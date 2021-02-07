import React from 'react';
import { Carousel } from 'react-bootstrap';

import carouselData from './carouselData';
import { StyledCarousel } from './Carousel.styles';
import useScreenWidth from '../../../hooks/useScreenWidth';

const HomePageCarousel = () => {
  const { isSmallScreen } = useScreenWidth();

  return (
    <StyledCarousel isSmallScreen={isSmallScreen}>
      <Carousel>
        {carouselData.map(({ id, alt }) => (
          <Carousel.Item key={alt} className='x'>
            <img
              className='carousel-image'
              alt={alt}
              src={`/images/carousel-${id}.jpeg`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledCarousel>
  )
};

export default HomePageCarousel;
