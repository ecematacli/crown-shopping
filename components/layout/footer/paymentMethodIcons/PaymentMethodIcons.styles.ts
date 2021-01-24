import styled from 'styled-components';

export const StyledPaymentMethodIcons = styled.div<{ isSmallScreen: boolean }>`
  display: ${({ isSmallScreen }) => (!isSmallScreen ? 'block' : 'flex')};
  justify-content: space-around;
  margin: ${({ isSmallScreen }) =>
    !isSmallScreen ? '1.5rem 0 0' : '1.5rem 2.3rem 0'};

  & > * {
    height: 2.4rem;
    width: 4.14rem;
    margin: ${({ isSmallScreen }) => (!isSmallScreen ? '0 0.7rem' : '0')};

    &:first-child {
      margin-left: 0;
    }
  }
`;
