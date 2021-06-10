import styled from 'styled-components'
import { breakPoints } from '../../styles/theme'

export const StyledProductInfo = styled.div`
  font-size: 14px;

  @media (${breakPoints('md')}) {
    margin: 2rem 0;
  }

  .stock-info {
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    color: ${({ theme: { palette } }) => palette.darkGrays[1]};
  }
`
