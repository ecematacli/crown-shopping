import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div<{ isSmallScreen: boolean }>`
  border-bottom: ${({ theme: { colors }, isSmallScreen }) =>
    isSmallScreen ? `1px solid ${colors.grays[4]}` : 'unset'};
`;

export const StyledHeader = styled(AlignedDiv)`
  .logo-image {
    cursor: pointer;
  }
`;

export const IconWrapper = styled(AlignedDiv)`
  margin-top: 8px;
  font-size: 1.7rem;

  cursor: pointer;

  .menu-icon {
    /* width: 1.5rem; */
    margin-right: 1.5rem;
  }

  .icon {
    margin-right: 1.5rem;
  }

  .close {
    margin-top: 0.2rem;
    margin-left: 0.3rem;
  }

  .cart-icon {
    margin-left: 1.5rem;
  }

  .icon-text {
    margin-left: 0.5rem;
    font-size: 16px;
  }

  .sign-in {
    margin-right: 2rem;
  }
`;

export const MenuContainer = styled.div<{ open: boolean }>`
  .mobile-menu {
    position: fixed;
    left: 0;
    top: 0;
    /* transform: translateY(-200%); */
    background: gray;
    height: 100%;
    width: 250px;
    /* z-index: 100; */
    /* ${props => props.open && 'transform: translateY(0)'}; */
    transform: translate3d(100vw);
    transition: all 0.9s;
  }
`;
