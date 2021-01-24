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

const Input: React.FC<Props> = ({ label, id, ...rest }) => (
  <Fragment>
    <label htmlFor={id}>{label}</label>
    <StyledInputGroup className='mb-3'>
      <FormControl id={id} {...rest} />
    </StyledInputGroup>
  </Fragment>
);

export default Input;
