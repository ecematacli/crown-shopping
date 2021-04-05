import styled from 'styled-components';
import { breakPoints } from '../../styles/theme';

interface StyledProps {
  width: number;
}

export const StyledProductThumbnail = styled.div<StyledProps>`
  cursor: pointer;

  .card {
    ${({ width }) => width && `max-width: ${width}rem`};
    padding: 1.5rem 0.2rem 0;
    border-radius: 0.1rem;

    @media (${breakPoints('md')}) {
      padding: 1.6rem 1rem 1.5rem;
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (${breakPoints('md')}) {
      padding-bottom: 0;
      padding-top: 1.3rem;
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
    width: 100%;
    height: auto;
  }
`;
