import styled from 'styled-components';

interface StyledProps {
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  isSmallScreen: boolean;
}

export const StyledContent = styled.div<StyledProps>`
  height: 100vh;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? '9rem' : '15.4rem')};
  overflow: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'hidden' : 'auto')};
  background-color: ${({ theme: { palette }, isMenuOpen }) =>
    isMenuOpen ? 'rgba(0, 0, 0, 0.2)' : `${palette.whites[0]}`};
`;
