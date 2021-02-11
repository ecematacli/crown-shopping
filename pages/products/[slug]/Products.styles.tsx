import styled from 'styled-components';


export const ProductListContainer = styled.div<{ isSmallScreen: boolean }>`
  display: ${({ isSmallScreen }) => !isSmallScreen ? 'flex' : 'block'};
  flex-wrap: wrap;
  justify-content: space-between;

  .product-thumbnail {
    flex-basis: 32%;
    margin: 2rem 0;
  }
`;
