import styled from 'styled-components';

interface Props {
  isMenuOpened: boolean;
}

export const StyledApp = styled.div<Props>`
  height: 100vh;
  background-color: ${({ isMenuOpened }) =>
    isMenuOpened ? 'rgba(0, 0, 0, 0.3)' : 'white'};
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.4 : 1)};
`;
