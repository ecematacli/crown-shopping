import styled from 'styled-components';

export const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const HeaderContainer = styled(AlignedDiv)`
  margin-bottom: 1rem;

  .logo-image {
    cursor: pointer;
  }
`;

export const IconWrapper = styled(AlignedDiv)`
  margin-right: 1rem;
  cursor: pointer;
  .icon {
    padding-right: 1rem;
  }
`;
