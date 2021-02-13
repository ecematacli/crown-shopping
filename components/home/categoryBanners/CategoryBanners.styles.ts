import styled from 'styled-components';
import { breakPoints } from '../../../styles/theme';

export const BannerContainer = styled.div`
  padding: 2rem 0 4rem;

  @media (${breakPoints('md')}) {
    padding: 4em 0 6rem;
  }

  .col,
  .col-md-6,
  .col-sm-12,
  .col-12 {
    padding: 0;
  }

  .pad-left {
    padding-left: 0;

    @media (${breakPoints('md')}) {
      padding: 1.5rem;
    }
  }
`;
