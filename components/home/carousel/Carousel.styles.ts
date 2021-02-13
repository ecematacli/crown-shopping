import styled from 'styled-components';
import { breakPoints } from '../../../styles/theme';

export const StyledCarousel = styled.div`
  .carousel-image {
    width: 100%;
    height: 16rem;

    @media (${breakPoints('md')}) {
      height: unset;
    }
  }
`;
