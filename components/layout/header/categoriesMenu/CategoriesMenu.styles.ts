import styled from 'styled-components';
import { breakPoints } from '../../../../styles/theme';

export const StyledCategoryMenu = styled.div`
  background-color: ${({ theme: { palette } }) => palette.whites[0]};

  ul {
    list-style-type: none;
  }

  .mobile-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${({ theme: { palette } }) => palette.whites[0]};
    height: 100%;
    width: 100vw;
    z-index: 15 !important;
    transition: all 0.5s cubic-bezier(0.4, 0.48, 0.45, 0.4);
  }

  .closed-sidebar {
    visibility: hidden;
    left: -500px;
  }
`;

export const MenuContainer = styled.div`
  overflow: auto;
  height: 100%;
  border-top: none;
  border-bottom: unset;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${breakPoints('md')}) {
    overflow: unset;
    border-top: ${({ theme: { palette } }) =>
      `1px solid ${palette.lightGrays[1]}`};
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.lightGrays[1]}`};
  }

  .mobile-header {
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.lightGrays[1]}`};
  }
`;

export const MenuNavbar = styled.ul<{ isThereOpenedCat: boolean }>`
  cursor: pointer;
  list-style-type: none;
  font-size: 14px;

  @media (${breakPoints('md')}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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
      `1px solid ${palette.lightGrays[4]}`};
    &:last-child {
      border-bottom: ${({ theme: { palette }, isThereOpenedCat }) =>
        !isThereOpenedCat ? `1px solid ${palette.lightGrays[4]}` : 'none'};
    }
  }

  .sm-menu-wrapper {
    padding: 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .isMyCatOpen {
      border-bottom: 1px solid red;
    }
  }
`;

export const MobileHead = styled.div`
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
