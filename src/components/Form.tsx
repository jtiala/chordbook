import * as React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Form: React.SFC<IProps> = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

export default Form;
