import * as React from "react";
import styled from "styled-components";

interface IProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
    outline: dimgray solid 3px;
  }

  :invalid {
    border-color: red;
    box-shadow: none;
    outline-color: red;
  }

  :hover,
  :active {
    border-color: tomato;
  }

  :hover:focus,
  :active:focus {
    outline-color: tomato;
  }
`;

const Textarea: React.SFC<IProps> = props => <StyledTextarea {...props} />;

export default Textarea;
