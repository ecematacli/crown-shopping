import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

export const LanguageSelectorContainer = styled.div`
  font-size: 14px;
  padding: 2.4rem 0;

  @media (${breakPoints('md')}) {
    padding: 0 0 0 1rem;
  }

  .flag-container {
    border-top: ${({ theme: { palette } }) =>
      `1px solid ${palette.darkGrays[1]}`};
    padding: 2.4rem 0;

    @media (${breakPoints('md')}) {
      border-top: none;
      padding: 0 0 0 1rem;
    }
  }

  .flag-wrapper-div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .country-flag {
    font-size: 2rem !important;
  }

  .country-name {
    color: ${({ theme: { palette } }) => `${palette.darkGrays[0]}`};
    padding: 0 0.8rem 0 1rem;
  }
`;
