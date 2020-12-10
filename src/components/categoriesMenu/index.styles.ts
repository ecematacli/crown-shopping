import styled from 'styled-components';

interface StyleProps {
  isSmallScreen?: boolean;
}

export const MenuContainer = styled.div`
  border-top: ${({ theme: { colors } }) => `1px solid ${colors.grays[2]}`};
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.grays[2]}`};
  .layout {
    padding: 0.8rem 2.4rem;
  }
`;

export const MenuNavbar = styled.ul<StyleProps>`
  cursor: pointer;
  list-style-type: none;
  font-size: 14px;
  display: ${({ isSmallScreen }) => !isSmallScreen && 'flex'};
  justify-content: space-between;
  /* padding-top: 81px; */
  /* background-color: black; */

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
        background-color: ${({ theme: { colors } }) => colors.blacks[0]};
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

  .small-menu-item {
    /* margin-top: 81px; */
    /* padding: 18px; */
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2.4rem;
`;
