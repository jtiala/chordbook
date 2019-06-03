import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

const StyledActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  background: whitesmoke;
  padding: 10px;

  > * {
    flex-grow: 1;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const ActionsBar: React.SFC = ({ children }) => {
  return <StyledActionsBar>{children}</StyledActionsBar>;
};

export default ActionsBar;
