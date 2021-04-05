import styled from 'styled-components';
import { breakPoints } from '../../../../../styles/theme';

export const StyledLegalSection = styled.ul`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding-bottom: 0.7rem;
  }

  .title {
    display: none;

    @media (${breakPoints('md')}) {
      display: block;
      text-transform: uppercase;
      font-weight: bold;
      padding: 0.7rem 0;
    }
  }
`;
