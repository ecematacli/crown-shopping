import styled from 'styled-components'
import { breakPoints } from '../../../styles/theme'

export const StyledProductDetails = styled.div`
  font-size: 14px;
  background-color: ${({ theme: { palette } }) => palette.lightGrays[11]};
  margin-bottom: 2rem;
  padding: 2rem 0;

  h4 {
    width: 20%;

    @media (${breakPoints('md')}) {
      width: 12%;
    }
  }

  .overview-container {
    margin: 1rem 0;
  }

  .space {
    padding: 1rem 2rem;
  }

  .delivery-return-info {
    padding: 1rem 1.5rem;
  }

  .attr-value {
    padding-left: 2rem;
    text-transform: capitalize;
  }
`
