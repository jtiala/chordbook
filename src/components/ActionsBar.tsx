import * as React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

const StyledActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background: whitesmoke;
  justify-items: space-between;

  > * {
    flex-grow: 1;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const ActionsBar: React.SFC<IProps> = ({ children }) => {
  return <StyledActionsBar>{children}</StyledActionsBar>;
};

export default ActionsBar;
