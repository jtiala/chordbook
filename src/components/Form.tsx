import * as React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  width: 480px;
`;

const Form: React.SFC<IProps> = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

export default Form;
