import styled from 'styled-components';

export const StyledProductCarousel = styled.div<{ isSmallScreen: boolean }>`
  padding: ${({ isSmallScreen }) => (!isSmallScreen ? '4em 0' : '3rem 0')};
  background-color: ${({ theme: { palette } }) => palette.lightGrays[9]};

  .product-carousel {
    .react-multiple-carousel__arrow {
      z-index: 1 !important;
    }

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

  .btn {
    margin-top: 0.7rem;
    border-color: ${({ theme: { palette } }) => palette.blacks[2]};
    color: ${({ theme: { palette } }) => palette.blacks[2]};
    padding: 1rem;

    &:hover {
      background-color: ${({ theme: { palette } }) => palette.blacks[2]};
      color: ${({ theme: { palette } }) => palette.whites[0]};
    }
  }
`;
