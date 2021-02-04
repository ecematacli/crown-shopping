import styled from 'styled-components';

export const StyledProductTiles = styled.div`
  padding: 4rem 0;
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
