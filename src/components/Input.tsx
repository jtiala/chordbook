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
  padding: 10px;
  border: 2px solid;
  border-color: dimgray;
  width: ${(props) => (props.width ? props.width : 'auto')};
  color: dimgray;
  font-size: 12px;
  font-weight: 400;
  -webkit-tap-highlight-color: transparent;

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

  :invalid {
    border-color: red;
    outline-color: red;
    box-shadow: none;
  }
`;

const Input: React.SFC<IProps> = (props) => <StyledInput {...props} />;

export default Input;
