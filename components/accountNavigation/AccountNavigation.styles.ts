import styled from 'styled-components';

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

  .navigation-menu {
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
    color: ${({ theme: { palette } }) => palette.darkGrays[3]};

    .item-icon {
      margin-right: 1rem;
      cursor: pointer;
    }

    .item-name {
      cursor: pointer;
    }
  }

  .active {
    font-weight: bold;
    cursor: zoom-in;
  }
`;
