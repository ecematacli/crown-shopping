import styled from 'styled-components'

export const StyledProductDetails = styled.div`
  font-size: 14px;
  background-color: ${({ theme: { palette } }) => palette.lightGrays[11]};
  margin-bottom: 3rem;
  padding: 2rem 0;

  .title {
    padding: 1rem 0 0.5rem;
    margin-bottom: 1rem;
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.darkGrays[1]}`};
  }
`
