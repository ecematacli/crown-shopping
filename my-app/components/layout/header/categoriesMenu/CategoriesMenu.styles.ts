import styled from 'styled-components';

export const StyledCategoryMenu = styled.div<{ open: boolean }>`
  ul {
    list-style-type: none;
  }
  .mobile-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${({ theme: { palette } }) => palette.whites[0]};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200px)')};
    height: 100%;
    width: 100vw;
    z-index: 100;
    /* transition: transform 99s; */
  }
`;

export const MenuContainer = styled.div<{ isSmallScreen: boolean }>`
  height: 100%;
  border-top: ${({ theme: { palette }, isSmallScreen }) =>
    !isSmallScreen ? `1px solid ${palette.grays[2]}` : 'none'};
  border-bottom: ${({ theme: { palette }, isSmallScreen }) =>
    !isSmallScreen ? `1px solid ${palette.grays[2]}` : 'unset'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .mobile-header {
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.grays[2]}`};
  }
`;

export const MenuNavbar = styled.ul<{ isSmallScreen: boolean }>`
  cursor: pointer;
  list-style-type: none;
  font-size: 14px;
  display: ${({ isSmallScreen }) => !isSmallScreen && 'flex'};
  justify-content: space-between;
  align-items: center;

  .menu-item {
    position: relative;
    span {
      &::after {
        content: '';
        position: absolute;
        margin-top: 3rem;
        left: 0;
        height: 9%;
        width: 0.9rem;
        background-color: ${({ theme: { palette } }) => palette.blacks[0]};
        transform: scaleX(0);
        transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
          background-color 0.1s;
      }

      &:hover::after {
        transform: scaleY(1);
        width: 100%;
      }
    }
  }

  .sm-menu-item {
    padding: 1.5rem 0;
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.grays[5]}`};
  }

  .sm-menu-wrapper {
    padding: 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MobileLogo = styled.div`
  height: 8.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2.4rem;
`;
