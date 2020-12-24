import styled from 'styled-components';

export const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div<{ isSmallScreen: boolean }>`
  border-bottom: ${({ theme: { palette }, isSmallScreen }) =>
    isSmallScreen ? `1px solid ${palette.grays[4]}` : 'unset'};
`;

export const StyledHeader = styled(AlignedDiv)`
  position: relative;

  .logo-image {
    cursor: pointer;
  }
`;

export const IconWrapper = styled(AlignedDiv)`
  margin-top: 8px;
  font-size: 1.7rem;

  cursor: pointer;

  .icon {
    margin-right: 1.5rem;
  }

  .cart-icon {
    margin-left: 1.5rem;
  }

  .icon-text {
    margin-left: 0.5rem;
    font-size: 16px;
  }

  .sign-in {
    margin-right: 2rem;
  }
`;
