import * as React from "react";
import styled from "styled-components";

interface IProps {
  label?: string;
  children?: React.ReactNode;
  key?: React.Key;
  htmlFor?: string;
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 14px;
  font-family: "Ubuntu Mono", monospace;
  text-transform: uppercase;
  > span {
    margin-bottom: 5px;
  }
`;

const Label: React.SFC<IProps> = ({ label, htmlFor, children }) => (
  <StyledLabel htmlFor={htmlFor}>
    <span>{label}</span> {children}
  </StyledLabel>
);

export default Label;
