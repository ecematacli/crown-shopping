import styled from 'styled-components';

interface StyledProps {
  width: number;
  isSmallScreen?: boolean;
}

export const StyledProductThumbnail = styled.div`
  cursor: pointer;

  .card {
    width: ${({ width }: StyledProps) => (width ? `${width}rem` : 'unset')};
    padding: ${({ isSmallScreen }: StyledProps) =>
      !isSmallScreen ? '1.6rem 1rem 2rem' : '1.6rem 0'};
  }

  .card-body-wrapper {
    display: ${({ isSmallScreen }) => (!isSmallScreen ? 'flex' : 'block')};
    justify-content: space-between;
    align-items: center;
  }

  .card-body {
    padding-bottom: 0;
    margin-top: ${({ isSmallScreen }) => (!isSmallScreen ? '1rem' : 'unset')};
  }

  .card-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: ${({ isSmallScreen }) => (!isSmallScreen ? 0 : '0.5rem')};
    flex-basis: 65%;
    font-size: ${({ isSmallScreen }) => (!isSmallScreen ? '14px' : '12px')};
  }

  .card-text {
    margin-bottom: ${({ isSmallScreen }) => (!isSmallScreen ? 0 : '0.5rem')};
    flex-basis: 35%;
    text-align: ${({ isSmallScreen }) => (!isSmallScreen ? 'right' : 'left')};
    font-size: ${({ isSmallScreen }) => (!isSmallScreen ? '16px' : '14px')};
  }

  .card-img-top {
    height: ${({ isSmallScreen }: StyledProps) =>
      `${!isSmallScreen ? 'unset' : '26rem'}`};
  }
`;
