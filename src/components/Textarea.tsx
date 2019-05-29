import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  value?: string;
  onChange?: (e: React.FormEvent) => void;
  rows?: number;
}

const Textarea: React.SFC<IProps> = ({ className, value, onChange, rows }) => (
  <textarea
    className={className}
    value={value}
    onChange={onChange}
    rows={rows}
  />
);

const StyledTextarea = styled(Textarea)`
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

export default StyledTextarea;
