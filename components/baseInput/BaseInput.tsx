import { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

import { StyledInputGroup } from './BaseInput.styles';
interface Props {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  width?: number;
  isSearchBar?: boolean;
  className?: string;
}

const BaseInput: React.FC<Props> = ({ label, id, width, ...rest }) => (
  <Fragment>
    {label && <label htmlFor={id}>{label}</label>}
    <StyledInputGroup width={width}>
      <FormControl id={id} {...rest} />
    </StyledInputGroup>
  </Fragment>
);

export default BaseInput;
