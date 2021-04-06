import styled from 'styled-components';
import { breakPoints } from '../../../../../styles/theme';

export const StyledSocialMediaIcons = styled.div`
  .social-media-icons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    @media (${breakPoints('md')}) {
      justify-content: space-around;
    }

    & > * {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      margin: 0;

      @media (${breakPoints('lg')}) {
        margin: 0 0.4rem;
      }
    }
  }
`;
