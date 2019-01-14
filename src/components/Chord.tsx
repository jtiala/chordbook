import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Chord: React.SFC<IProps> = ({ className, children }) => (
  <span className={className}>{children}</span>
);

const StyledChord = styled(Chord)`
  padding: 0 10px;
`;

export default StyledChord;
