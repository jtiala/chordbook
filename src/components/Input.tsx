import * as React from "react";
import styled from "styled-components";

interface IProps {
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.FormEvent) => void;
}

const StyledInput = styled.input`
  flex-grow: 1;
  margin: 10px;
  padding: 10px;
  border: 2px solid;
  border-color: dimgray;
  color: dimgray;
  font-size: 12px;
  -webkit-tap-highlight-color: transparent;

  :focus {
    outline: dimgray auto 5px;
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

const Input: React.SFC<IProps> = props => <StyledInput {...props} />;

export default Input;
