import styled from 'styled-components';

export const LanguageSelectorContainer = styled.div<{ isSmallScreen: boolean }>`
  font-size: 14px;
  padding: ${({ isSmallScreen }) =>
    !isSmallScreen ? '0 0 0 1rem' : '2.4rem 0'};

  .flag-container {
    border-top: ${({ theme: { palette }, isSmallScreen }) =>
      !isSmallScreen ? 'none' : `1px solid ${palette.darkGrays[1]}`};
    padding: ${({ isSmallScreen }) =>
      !isSmallScreen ? '0 0 0 1rem' : '2.4rem 0'};
  }

  .flag-wrapper-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .country-flag {
    font-size: 2rem !important;
  }

  .flag-icon {
    cursor: pointer;
  }

  .country-name {
    color: ${({ theme: { palette } }) => `${palette.darkGrays[0]}`};
    padding: 0 0.8rem 0 1rem;
  }
`;
