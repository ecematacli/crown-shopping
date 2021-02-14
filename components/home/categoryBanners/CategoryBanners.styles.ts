import styled from 'styled-components';
import { breakPoints } from '../../../styles/theme';

export const BannerContainer = styled.div`
  padding: 1rem 0 2.4rem;

  @media (${breakPoints('md')}) {
    padding: 4em 0 6rem;
  }

  .container {
    max-width: 100%;
  }

  .col,
  .col-md-6,
  .col-sm-12,
  .col-12 {
    padding: 0;
  }

  .pad-left {
    padding-left: 0;

    @media (${breakPoints('lg')}) {
      padding-left: 1.5rem;
    }
  }
`;
