import styled from 'styled-components'

export const MenuContainer = styled.div`
  border-top: ${({ theme: { colors } }) => `1px solid ${colors.grays[2]}`};
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.grays[2]}`};
  box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.08);
  .some {
    padding: 0.8rem 2.4rem;
  }
`

export const MenuNavbar = styled.ul`
  cursor: pointer;
  list-style-type: none;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`
