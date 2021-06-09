import styled from 'styled-components'

export const StyledProductDetails = styled.div`
  font-size: 14px !important;
  background-color: ${({ theme: { palette } }) => palette.lightGrays[11]};
  margin-bottom: 3rem;
  padding: 2rem 0;

  h4 {
    padding-right: 2rem;
  }

  .title {
    padding: 1rem 0 0.5rem;
    margin-bottom: 1rem;
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.darkGrays[1]}`};
  }
`
