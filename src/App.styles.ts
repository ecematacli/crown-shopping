import styled from 'styled-components';

interface StyleProps {
  isMenuOpened: boolean;
}

export const StyledApp = styled.div<StyleProps>`
  height: 100vh;
  background-color: ${({ isMenuOpened }) =>
    isMenuOpened ? 'rgba(0, 0, 0, 0.3)' : 'white'};
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.4 : 1)};
`;
