import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FormGroup = styled(Form.Group)`
  width: ${({ width }) => `${width}px` || 'unset'};

  .input-wrapper {
    display: flex;
    align-items: center;
  }

  .input {
    font-size: 14px;
    border-color: ${({ theme: { colors } }) => `${colors.grays[2]}`};
  }

  .icon-wrapper {
    margin-left: -1.8rem;
  }
`;
