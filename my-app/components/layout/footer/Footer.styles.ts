import styled from 'styled-components';

export const FooterContainer = styled.footer<{ isSmallScreen: boolean }>`
  margin-bottom: 1.4rem;
  font-size: 14px;
  color: ${({ theme: { palette } }) => palette.darkGrays[3]};

  ul {
    list-style-type: none;
  }

  .footer-list-item {
    padding: 1rem 0;
  }

  .footer-item-wrapper {
    border: ${({ theme: { palette } }) => `1px solid ${palette.lightGrays[4]}`};
  }

  .title-section {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;

    h5 {
      font-weight: bold;
    }
  }

  .social-media-icons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    & > * {
      height: 2.4rem;
      width: 2.4rem;
      cursor: pointer;
    }
  }

  .payment-method-icons {
    display: flex;
    justify-content: space-around;
    margin: 1.5rem 2.3rem 0;

    & > * {
      height: 2.5rem;
      width: 4.15rem;
    }
  }

  .legal-terms {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      padding-bottom: 0.7rem;
    }
  }

  .footer-bottom-section {
    font-size: 12px;
    margin-top: 1.8rem;
    border-top: ${({ theme: { palette } }) =>
      `1px solid ${palette.lightGrays[8]}`};

    .company-info {
      margin: 1.3rem 0 1rem;
      display: flex;
      align-items: center;
    }
  }
`;
