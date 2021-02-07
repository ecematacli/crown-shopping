import styled from 'styled-components';
interface StyledProps {
  isMenuOpen: boolean;
  isSmallScreen: boolean;
}

export const LayoutContentContainer = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 20 !important;
`;

export const StyledContent = styled.div<StyledProps>`
  height: ${({ isSmallScreen }) =>
    isSmallScreen ? 'calc(100vh - 9rem)' : 'calc(100vh - 15.3rem)'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? '9rem' : '15.3rem')};
  overflow: auto;
`;

export const BodyLayout = styled.div<{ isMenuOpen: boolean; }>`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 6 !important;
  background-color: ${({ theme: { palette }, isMenuOpen }) =>
    isMenuOpen ? `${palette.blacks[1]}` : 'unset'};
`;
