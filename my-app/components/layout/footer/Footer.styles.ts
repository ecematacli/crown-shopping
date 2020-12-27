import Styled from 'styled-components';

export const FooterStyles = Styled.div`
  display: flex;
  background: ${({ theme }) => theme.palette.grays[0]};
  color: ${({ theme: { palette } }) => palette.whites[0]};
  flex-wrap: wrap;
  .footer-top {
    width: 100%;
    padding: 1em 2em;
    display: flex;
    height: 1em;
    font-size: .8em;
    list-style: none;
    margin: 0;
    
    li {
      cursor: pointer;
      margin-right: 1em;
    }
  }
`;
