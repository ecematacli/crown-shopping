import styled from 'styled-components';
import { InputGroup } from 'react-bootstrap';

export const StyledInputGroup = styled(InputGroup)`
  width: ${({ width }) => (width ? `${width}rem` : 'unset')};

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
