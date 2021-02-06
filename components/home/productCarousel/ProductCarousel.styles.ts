import styled from 'styled-components';

export const StyledProductCarousel = styled.div<{ isSmallScreen: boolean }>`
  padding: ${({ isSmallScreen }) => (!isSmallScreen ? '4em 0' : '3rem 0')};
  background-color: ${({ theme: { palette } }) => palette.lightGrays[9]};

  .product-carousel {
    .react-multiple-carousel__arrow--left {
      left: 0px;
    }

    .react-multiple-carousel__arrow--right {
      right: 0;
    }

    &:first-child {
      padding-left: 8px;
    }
  }

  .product-carousel-item {
    padding-right: 15px;
  }
`;
