import styled from 'styled-components';

interface StyledProps {
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  isSmallScreen: boolean;
}

export const StyledContent = styled.div<StyledProps>`
  height: ${({ isSmallScreen }) => (isSmallScreen ? 'calc(100vh - 10rem)' : 'calc(100vh - 15.5rem)')}; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? '10rem' : '15.5rem')};
  overflow: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'hidden' : 'auto')};
  background-color: ${({ theme: { palette }, isMenuOpen }) =>
    isMenuOpen ? 'rgba(0, 0, 0, 0.2)' : `${palette.whites[0]}`};
`;
