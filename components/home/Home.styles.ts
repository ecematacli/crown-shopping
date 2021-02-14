import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

export const HomeContainer = styled.div`
  @media (${breakPoints('md')}) {
    display: flex;
    flex-direction: column;

    .carousel-wrapper {
      order: 1;
    }

    .product-carousel-wrapper {
      order: 2;
    }

    .category-banners-wrapper {
      order: 3;
    }
  }
`;
