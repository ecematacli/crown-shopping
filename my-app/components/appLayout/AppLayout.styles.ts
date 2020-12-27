import styled from 'styled-components';

interface Props {
  padding?: { top?: string; bottom?: string; rightLeft?: string };
}

export const AppContainer = styled.div<Props>`
  padding: ${({ padding }) => {
    const rightLeft = padding?.rightLeft ? `${padding.rightLeft}rem` : '2.4rem';

    if (padding?.top && padding?.bottom) {
      return `${padding.top}rem ${rightLeft} ${padding.bottom}rem ${rightLeft}`;
    } else if (padding?.top) {
      return `${padding.top}rem ${rightLeft}  ${rightLeft}`;
    } else if (padding?.bottom) {
      return `${rightLeft} ${rightLeft} ${padding.bottom}rem`;
    }
    return `${rightLeft}`;
  }};
`;

export const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 109rem;
`;
