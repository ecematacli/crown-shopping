import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { FormGroup } from './Input.styles';

interface Props {
  value: any;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  width?: number;
}

const Input: React.FC<Props> = ({ label, placeholder, value, onInputChange, width }) => (
  <FormGroup className="form-group" width={width}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
    />
  </FormGroup>
);

export default Input;
