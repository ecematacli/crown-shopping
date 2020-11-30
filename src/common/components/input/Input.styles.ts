import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FormGroup = styled(Form.Group)`
  width: ${({ width }) => `${width}px` || 'unset'};

  .icon-wrapper {
    display: flex;
    justify-content: center;
  }
`;
