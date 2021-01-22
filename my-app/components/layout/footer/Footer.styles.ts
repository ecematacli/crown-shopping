import styled from 'styled-components';

export const FooterContainer = styled.footer<{ isSmallScreen: boolean }>`
  /* display: flex; */

  ul {
    list-style-type: none;
  }

  .footer-item-wrapper {
    border: ${({ theme: { palette } }) => `1px solid ${palette.grays[5]}`};
    /* padding: 1.5rem 0; */
  }

  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
