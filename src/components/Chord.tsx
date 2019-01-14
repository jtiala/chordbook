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
  font-size: 20px;
`;

export default StyledChord;
