import styled from 'styled-components';

interface StyledProps {
  isSmallScreen: boolean;
}

export const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div<StyledProps>`
  border-bottom: ${({ theme: { colors }, isSmallScreen }) =>
    isSmallScreen ? `1px solid ${colors.grays[2]}` : 'unset'};
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

  .menu-icon {
    width: 1.5rem;
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
