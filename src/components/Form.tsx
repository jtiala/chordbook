import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

const Form: React.SFC<IProps> = ({ className, children, onSubmit }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  width: 480px;
`;

export default StyledForm;
