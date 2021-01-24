import styled from 'styled-components';

export const StyledLegalSection = styled.ul<{ isSmallScreen: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding-bottom: 0.7rem;
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.7rem 0;
  }
`;
