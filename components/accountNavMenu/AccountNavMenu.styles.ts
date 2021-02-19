import styled from 'styled-components';

export const StyledAccountNavMenu = styled.div`
  .selected-item {
    padding: 1.2rem 0;
    text-align: center;
    background-color: ${({ theme: { palette } }) => palette.lightGrays[2]};
  }
`;
