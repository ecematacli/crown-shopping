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
    font-size: 16px;
  }

  .card-title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .card-body {
    padding-bottom: 0;
  }

  .card-text {
    margin-bottom: 0.5rem;
  }

  .card-img-top {
    height: ${({ isSmallScreen }: StyledProps) =>
      `${!isSmallScreen ? 'unset' : '35rem'}`};
  }
`;
