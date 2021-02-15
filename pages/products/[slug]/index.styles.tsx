import styled from 'styled-components';
import { breakPoints } from '../../../styles/theme';

const ProductListContainer = styled.div`
  @media (${breakPoints('md')}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &::after {
      content: "";
      width: 32%;
    }
  }

  .product-thumbnail {
    flex-basis: 32%;
    margin: 2rem 0;
  }
`;

export default ProductListContainer;
