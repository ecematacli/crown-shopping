import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledButton = styled(Button)`
  background-color: ${({ theme: { palette } }) => palette.blacks[0]};
  border-color: transparent;
  color: ${({ theme: { palette } }) => palette.whites[0]};
  font-weight: bold;
  margin-top: 2rem;
`;
