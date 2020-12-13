import styled from 'styled-components';

export const StyledApp = styled.div<{ isMenuOpened: boolean }>`
  height: 100vh;

  .app {
    height: 80%;
    background-color: ${({ isMenuOpened }) => {
      console.log('is', isMenuOpened);
      return isMenuOpened ? 'rgba(0, 0, 0, 0.3)' : 'white';
    }};
    opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.4 : 1)};
  }
`;
