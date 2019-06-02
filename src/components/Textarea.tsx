import * as React from "react";
import styled from "styled-components";

interface IProps {
  value?: string;
  onChange?: (e: React.FormEvent) => void;
  rows?: number;
}

const StyledTextarea = styled.textarea`
  flex-grow: 1;
  padding: 10px;
  border: 2px solid;
  border-color: dimgray;
  color: dimgray;
  font-size: 12px;
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

interface IProps {
  value?: string;
  onChange?: (e: React.FormEvent) => void;
  rows?: number;
}

const Textarea: React.SFC<IProps> = props => <StyledTextarea {...props} />;

export default Textarea;
