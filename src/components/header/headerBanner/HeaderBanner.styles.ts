import styled from 'styled-components';

export const StyledHeaderBanner = styled.div`
  background-color: ${({ theme: { colors, breakpoints } }) =>
    `${colors.grays[7]}`};
  font-size: 14px;

  .banner-content {
    display: flex;
    flex-direction: column;

    > span {
      cursor: pointer;
      padding: 1.4rem 0;
      color: ${({ theme: { colors } }) => `${colors.grays[6]}`};
    }
  }

  .flag-container {
    border-top: ${({ theme: { colors } }) => `1px solid ${colors.grays[1]}`};
  }

  .flag-wrapper-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .country-flag {
    font-size: 2rem !important;
  }

  .flag-icon {
    cursor: pointer;
  }

  .country-name {
    color: ${({ theme: { colors } }) => `${colors.grays[6]}`};
    padding: 0 0.8rem 0 1rem;
  }
`;