import * as React from "react";
import styled from "styled-components";
import ChordBar from "./ChordBar";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const LyricsLine: React.SFC<IProps> = ({ className, children }) => (
  <span className={className}>{children}</span>
);

const StyledLyricsLine = styled(LyricsLine)`
  flex-grow: 1;
  padding-bottom: 5px;
`;

export default StyledLyricsLine;
