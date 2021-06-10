import styled, { css } from 'styled-components'

const fontSize = css`
  font-size: 24px;
`

export const StyledProductReview = styled.div`
  font-size: 15px;
  margin-bottom: 2.5rem;

  .progress {
    height: 5px;
  }

  .review-actual {
    ${fontSize}
  }

  .review-max {
    ${fontSize}
    color: ${({ theme: { palette } }) => palette.darkGrays[5]};
    padding-left: 0.8rem;
  }

  .review-progress {
    margin-bottom: 1.5rem;
  }
`
