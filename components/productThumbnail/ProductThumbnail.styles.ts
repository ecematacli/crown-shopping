import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

interface StyledProps {
  width: number;
}

export const StyledProductThumbnail = styled.div`
  cursor: pointer;

  .card {
    width: ${({ width }: StyledProps) => (width ? `${width}rem` : 'unset')};
    padding: 1.6rem 0;

    @media (${breakPoints('md')}) {
      padding: 1.6rem 1rem 2rem;
    }
  }

  .card-body-wrapper {
    @media (${breakPoints('md')}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .card-body {
    padding-bottom: 0;

    @media (${breakPoints('md')}) {
      margin-top: 1rem;
    }
  }

  .card-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0.5rem;
    flex-basis: 65%;
    font-size: 12px;

    @media (${breakPoints('md')}) {
      margin-bottom: 0;
      font-size: 14px;
    }
  }

  .card-text {
    margin-bottom: 0.5rem;
    flex-basis: 35%;
    text-align: left;
    font-size: 14px;

    @media (${breakPoints('md')}) {
      margin-bottom: 0;
      text-align: right;
      font-size: 16px;
    }
  }

  .card-img-top {
    height: 26.5rem;

    @media (${breakPoints('md')}) {
      height: unset;
    }
  }
`;
