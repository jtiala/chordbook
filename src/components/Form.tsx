import * as React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  variant?: string;
}

const StyledForm = styled.form<IProps>`
  display: flex;
  flex-direction: column;
  width: ${props => (props.variant === "stretch" ? "100%" : "480px")};
`;

const Form: React.SFC<IProps> = ({ children, onSubmit, variant }) => (
  <StyledForm onSubmit={onSubmit} variant={variant}>
    {children}
  </StyledForm>
);

export default Form;
