import styled from 'styled-components';

interface StyledProps {
  padding?: { top?: string; bottom?: string };
}

export const AppContainer = styled.div<StyledProps>`
  padding: ${({ padding }) => {
    if (padding?.top && padding?.bottom) {
      return `${padding.top} 2.4rem ${padding.bottom}rem 2.4rem`;
    } else if (padding?.top) {
      return `${padding.top}rem 2.4rem  2.4rem`;
    } else if (padding?.bottom) {
      return `2.4rem 2.4rem ${padding.bottom}rem`;
    }
    return '2.4rem';
  }};
`;

export const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 109rem;
`;
