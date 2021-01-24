import styled from 'styled-components';

export const StyledSocialMediaIcons = styled.div<{ isSmallScreen: boolean }>`
  .social-media-icons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    & > * {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      margin: ${({ isSmallScreen }) => (!isSmallScreen ? '0 0.4rem' : 0)};
    }
  }
`;
