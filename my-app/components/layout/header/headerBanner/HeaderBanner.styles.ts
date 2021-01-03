import styled from 'styled-components';

export const StyledHeaderBanner = styled.div<{ isSmallScreen: boolean }>`
  background-color: ${({ theme: { palette } }) => `${palette.grays[7]}`};
  font-size: 14px;

  .wrapper {
    display: ${({ isSmallScreen }) => (!isSmallScreen ? 'flex' : 'block')};
    align-items: center;
    justify-content: flex-end;
    height: ${({ isSmallScreen }) => (!isSmallScreen ? '3.5rem' : 'unset')};
  }

  .flag-container {
    border-top: ${({ theme: { palette }, isSmallScreen }) =>
      !isSmallScreen ? 'none' : `1px solid ${palette.grays[1]}`};
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
    color: ${({ theme: { palette } }) => `${palette.grays[6]}`};
    padding: 0 0.8rem 0 1rem;
  }
`;

export const StyledContent = styled.div<{ isSmallScreen: boolean }>`
  display: flex;
  flex-direction: ${({ isSmallScreen }) => (!isSmallScreen ? 'row' : 'column')};
  justify-content: ${({ isSmallScreen }) =>
    !isSmallScreen ? 'flex-end' : 'unset'};
  padding: ${({ isSmallScreen }) => (!isSmallScreen ? 'unset' : '0 2.4rem')};

  > span {
    cursor: pointer;
    padding: ${({ isSmallScreen }) => (!isSmallScreen ? '1rem' : '1.4rem 0')};
    color: ${({ theme: { palette } }) => `${palette.grays[6]}`};
    border-right: ${({ isSmallScreen, theme: { palette } }) =>
      !isSmallScreen ? `0.1rem solid ${palette.grays[8]}` : 'none'};
  }
`;
