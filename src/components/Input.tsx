import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string;
  size?: number;
  min?: number;
  max?: number;
  width?: string;
  onChange?: (e: React.FormEvent) => void;
}

const StyledInput = styled.input<IProps>`
  display: block;
  width: ${(props) => (props.width ? props.width : 'auto')};
  padding: 10px;
  border: 2px solid;
  border-color: dimgray;
  color: dimgray;
  font-size: 12px;
  font-weight: 400;
  -webkit-tap-highlight-color: transparent;

  :invalid {
    border-color: red;
    box-shadow: none;
    outline-color: red;
  }

  :focus {
    outline: dimgray auto 3px;
  }

  :hover,
  :active {
    border-color: #ff8d79;
  }

  :hover:focus,
  :active:focus {
    outline-color: #ff8d79;
  }
`;

const Input: React.SFC<IProps> = (props) => <StyledInput {...props} />;

export default Input;
