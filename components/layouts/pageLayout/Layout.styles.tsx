import styled from 'styled-components';
import { breakPoints } from '../../../styles/theme';

export const LayoutContentContainer = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 20 !important;
`;

export const StyledContent = styled.div`
  height: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 9rem; 
  overflow: auto;

  @media (${breakPoints('lg')}) {
    height: calc(100vh - 15.3rem);
    margin-top: 15.3rem;
  }
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
