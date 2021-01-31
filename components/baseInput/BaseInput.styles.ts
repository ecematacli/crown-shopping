import styled from 'styled-components';
import { InputGroup } from 'react-bootstrap';

export const StyledInputGroup = styled(InputGroup)`
  width: ${({ width }) => (width ? `${width}rem` : '100%')};

  .input-wrapper {
    margin-bottom: 2rem;
    background-color: red !important;
  }

  .form-control {
    font-size: 14px;
    border-color: ${({ theme: { palette } }) => `${palette.darkGrays[1]}`};

    ::placeholder {
      color: ${({ theme: { palette } }) => `${palette.lightGrays[6]}`};
    }
  }

  .form-control:focus {
    border-color: ${({ theme: { palette } }) => `${palette.darkGrays[0]}`};
  }
`;
