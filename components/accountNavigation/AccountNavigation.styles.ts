import styled from 'styled-components';

export const StyledAccountNavMenu = styled.div`
  font-size: 14px;

  .selected-item {
    padding: 1.1rem 0;
    text-align: center;
    background-color: ${({ theme: { palette } }) => palette.lightGrays[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selected-item-title {
    padding: 0 0.75rem;
  }
`;
