import styled from 'styled-components';

export const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div<{ isSmallScreen: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${({ theme: { palette } }) => palette.whites[0]};
`;

export const HeaderBar = styled.div<{ isSmallScreen: boolean }>`
  border-bottom: ${({ theme: { palette }, isSmallScreen }) =>
    isSmallScreen ? `1px solid ${palette.grays[4]}` : 'unset'};
`;

export const StyledHeader = styled(AlignedDiv)`
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
