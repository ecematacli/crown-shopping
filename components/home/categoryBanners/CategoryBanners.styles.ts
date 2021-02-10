import styled from 'styled-components';

export const BannerContainer = styled.div<{ isSmallScreen: boolean }>`
  padding: ${({ isSmallScreen }) =>
    !isSmallScreen ? '4em 0 6rem' : '2rem 0 4rem'};

  .col,
  .col-md-6,
  .col-sm-12,
  .col-12 {
    padding: 0;
  }

  .pad-left {
    padding-left: ${({ isSmallScreen }) => (!isSmallScreen ? '1.5rem' : '0')};
  }
`;
