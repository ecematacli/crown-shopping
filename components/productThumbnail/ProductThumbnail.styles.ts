import styled from 'styled-components';

interface StyledProps {
  width: number;
  isSmallScreen?: boolean;
}

export const StyledProductThumbnail = styled.div`
  .card {
    width: ${({ width }: StyledProps) => (width ? `${width}rem` : 'unset')};
    padding: ${({ isSmallScreen }: StyledProps) =>
      `1.6rem ${!isSmallScreen ? '1rem' : '0'}`};
    font-weight: 16px;
  }

  .card-title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .card-body {
    padding-bottom: 0;
  }
`;
