import styled from 'styled-components';

export const SmFooterContainer = styled.footer`
  font-size: 14px;
  color: ${({ theme: { palette } }) => palette.darkGrays[3]};

  ul {
    list-style-type: none;
  }

  .footer-list-item {
    padding: 1rem 0;
  }

  .sm-layout {
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

  .footer-bottom-section {
    font-size: 12px;
    margin-top: 1.8rem;
    border-top: ${({ theme: { palette } }) =>
      `1px solid ${palette.lightGrays[8]}`};

    .company-info {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bottom-layout {
      margin: 2rem 0 2rem;
    }
  }
`;

export const BgFooterContainer = styled.footer`
  font-size: 14px;
  color: ${({ theme: { palette } }) => palette.darkGrays[3]};
  border-top: ${({ theme: { palette } }) =>
    `1px solid ${palette.lightGrays[3]}`};

  ul {
    list-style-type: none;
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.7rem 0;
  }

  .footer-item-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .footer-list-item {
    padding-bottom: 0.7rem;
    cursor: pointer;
  }

  .newsletter-section {
    display: flex;
    align-items: center;
  }

  .newsletter-input {
    margin: -1rem 0 2.5rem;
  }

  .last-column {
  }
`;
