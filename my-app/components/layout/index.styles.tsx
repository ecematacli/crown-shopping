import styled from 'styled-components';

export const StyledContent = styled.div<{ isMenuOpened: boolean }>`
  height: 100vh;

  .app {
    height: 100%;
    background-color: ${({ theme: { palette }, isMenuOpened }) =>
    isMenuOpened ? 'rgba(0, 0, 0, 0.3)' : `${palette.whites[0]}`};
    opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.4 : 1)};
  }
`;