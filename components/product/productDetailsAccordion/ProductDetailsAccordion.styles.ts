import styled from 'styled-components'

export const StyledAccordion = styled.div`
  .expandable {
    cursor: pointer;
    padding: 1rem 0 0.5rem;
    font-size: 15px;
    margin-bottom: 1rem;
    border-bottom: ${({ theme: { palette } }) =>
      `1px solid ${palette.darkGrays[1]}`};
  }
`
