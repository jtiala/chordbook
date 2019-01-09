import * as React from "react";
import styled from "styled-components";
import LyricsLine from "./LyricsLine";

export interface IProps {
  className?: string;
  lines?: any[];
}

const Lyrics: React.SFC<IProps> = ({ className, lines }) => (
  <div className={className}>
    {lines &&
      lines.map((line: any, i: number) => (
        <LyricsLine key={`LyricsLine-${i}`}>{line}</LyricsLine>
      ))}
  </div>
);

const StyledLyrics = styled(Lyrics)`
  display: flex;
  flex-direction: column;
`;

export default StyledLyrics;
