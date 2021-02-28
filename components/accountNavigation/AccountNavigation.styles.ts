import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

export const StyledAccountNavMenu = styled.div`
  font-size: 14px;
  display: initial;

  .active-item {
    position: sticky;
    top: 0;
    cursor: pointer;
    padding: 1.1rem 0;
    background-color: ${({ theme: { palette } }) => palette.lightGrays[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active-item-title {
    padding: 0 0.75rem;
  }

  .sm-screen-nav {
    padding: 0 2.4rem;
    position: absolute;
    padding-top: 1.5rem;
    background-color: ${({ theme: { palette } }) => palette.lightGrays[10]};
    height: 100vh;
    width: 100vw;
    z-index: 10;
  }

  .nav-item-block {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    color: ${({ theme: { palette } }) => palette.darkGrays[4]};
    border-left: 4px solid transparent;
    cursor: pointer;

    @media (${breakPoints('md')}) {
      display: block;
      padding: 2.3rem 0 2.3rem 2.2rem;

      &:hover {
        color: ${({ theme: { palette } }) => palette.blacks[3]};
        border-left: ${({ theme: { palette } }) =>
          `4px solid ${palette.lightGrays[1]}`};
      }
    }

    .item-icon {
      margin-right: 1rem;
    }
  }

  .active {
    font-weight: bold;
    color: ${({ theme: { palette } }) => palette.darkGrays[3]};

    @media (${breakPoints('md')}) {
      font-weight: normal;
      color: ${({ theme: { palette } }) => palette.blacks[3]};
    }
  }
`;
