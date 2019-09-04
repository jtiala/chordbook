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
  font-family: "Ubuntu Mono", monospace;
  font-size: 14px;
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
