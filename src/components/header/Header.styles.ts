import styled from 'styled-components';

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
  position: relative;

  .logo-image {
    cursor: pointer;
  }
`;

export const IconWrapper = styled(AlignedDiv)`
  margin-top: 8px;
  font-size: 1.7rem;

  cursor: pointer;

  .icon {
    margin-right: 1.5rem;
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
  .mobile-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200px)')};
    height: 100vh;
    width: 100vw;
    z-index: 100;
    transition: 0.8s ease;
  }
`;
