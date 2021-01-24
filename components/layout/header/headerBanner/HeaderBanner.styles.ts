import styled from 'styled-components';

export const StyledHeaderBanner = styled.div<{ isSmallScreen: boolean }>`
  background-color: ${({ theme: { palette } }) => `${palette.lightGrays[5]}`};
  font-size: 14px;

  .language-selector {
    border-top: ${({ theme: { palette }, isSmallScreen }) =>
      !isSmallScreen ? 'none' : `1px solid ${palette.darkGrays[1]}`};
  }

  .wrapper {
    display: ${({ isSmallScreen }) => (!isSmallScreen ? 'flex' : 'block')};
    align-items: center;
    justify-content: flex-end;
    height: ${({ isSmallScreen }) => (!isSmallScreen ? '3.5rem' : 'unset')};
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
    padding: ${({ isSmallScreen }) =>
      !isSmallScreen ? '0.70rem 1rem' : '1.4rem 0'};
    color: ${({ theme: { palette } }) => `${palette.darkGrays[0]}`};
    border-right: ${({ isSmallScreen, theme: { palette } }) =>
      !isSmallScreen ? `0.1rem solid ${palette.lightGrays[6]}` : 'none'};
  }
`;
