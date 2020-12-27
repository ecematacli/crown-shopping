import { Form } from 'react-bootstrap';

import { FormGroup } from './Input.styles';
interface Props {
  value: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  width?: number;
  isSearchBar?: boolean;
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onInputChange,
  width,
}) => (
    <FormGroup className='form-group' width={width}>
      <Form.Label>{label}</Form.Label>
      <div className='input-wrapper'>
        <Form.Control
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          className='input'
        />
      </div>
    </FormGroup>
  );

export default Input;
