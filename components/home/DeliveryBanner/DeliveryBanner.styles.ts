import styled from 'styled-components';

export const StyledDeliveryBanner = styled.div`
  width: 100%;
  border-bottom: ${({ theme: { palette } }) =>
    `1px solid ${palette.lightGrays[3]}`};
  margin-bottom: 200px;

  .carousel {
    height: 100vh;
  }
`;
