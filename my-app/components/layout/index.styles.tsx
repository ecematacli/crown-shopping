import styled from 'styled-components';

export const StyledContent = styled.div<{ isMenuOpened: boolean }>`
  height: 100vh;

  .app {
    height: 80%;
    background-color: ${({ isMenuOpened }) =>
    isMenuOpened ? 'rgba(0, 0, 0, 0.3)' : 'white'};
    opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.4 : 1)};
  }
`;