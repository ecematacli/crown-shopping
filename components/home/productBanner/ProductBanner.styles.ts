import styled from 'styled-components';

interface StyledProps {
  width: number;
  height: number;
}

export const ProductBannerContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const Image = styled.img<StyledProps>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};
`;
