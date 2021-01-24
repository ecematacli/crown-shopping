import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FormGroup = styled(Form.Group)`
  width: ${({ width }) => (width ? `${width}rem` : 'unset')};

  .input-wrapper {
    /* display: flex;
    align-items: center; */
  }

  .input {
    font-size: 14px;
  }

  .icon-wrapper {
    margin-left: -1.8rem;
  }
`;
