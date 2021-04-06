import styled from 'styled-components';
import { breakPoints } from '../../../styles/theme';

const ProductListContainer = styled.div`
  .container {
    padding: 0;
    margin: 0;
    max-width: unset;
    padding-bottom: 3rem;
  }
`;

export const ProductThumbnailContainer = styled.div`
  margin: 0.5rem 0;

  @media (${breakPoints('md')}) {
    margin: 2rem 0;
    padding-right: .75rem;
  }
`;

export default ProductListContainer;
