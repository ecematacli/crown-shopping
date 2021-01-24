import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledButton = styled(Button)`
  border-color: transparent;
  font-weight: bold;
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
`;
