import styled from 'styled-components';

export const StyledCarousel = styled.div<{ isSmallScreen: boolean }>`
  .carousel-image {
    width: 100%;
    height: ${({ isSmallScreen }) => (isSmallScreen ? '16rem' : 'unset')};
  }
`;
