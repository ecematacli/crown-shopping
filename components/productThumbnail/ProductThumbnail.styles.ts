import styled from 'styled-components'
import { breakPoints } from '../../styles/theme'

interface StyleProps {
  width: string
  hasNoFrame: boolean
}

export const StyledProductThumbnail = styled.div<StyleProps>`
  cursor: pointer;

  .card {
    ${({ width }) => width && `max-width: ${width}rem`};
    padding: 0.5rem 2rem 0;
    border-radius: 0.1rem;
    ${({ hasNoFrame }) => hasNoFrame && `border: unset`};

    @media (${breakPoints('md')}) {
      padding: 1.6rem 2rem 1.5rem;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 0.75rem 0.75rem;

    @media (${breakPoints('md')}) {
      padding-bottom: 0;
      padding-top: 1.3rem;
      margin-top: 1rem;
    }
  }

  .card-title,
  h5 {
    margin: 0 0.7rem 0 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
    max-width: 100%;

    @media (${breakPoints('md')}) {
      font-size: 14px;
    }
  }

  .card-text {
    margin-bottom: 0.5rem;
    flex-basis: 35%;
    text-align: right;
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
`
