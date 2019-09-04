import * as React from "react";
import styled from "styled-components";

const LyricsLine = styled.p`
  margin: 0 0 5px 0;
`;

interface IProps {
  lines?: string[];
}

const Lyrics: React.SFC<IProps> = ({ lines }) => (
  <div>
    {lines &&
      lines.map((line: string, i: number) => (
        <LyricsLine key={`LyricsLine-${i}`}>{line}</LyricsLine>
      ))}
  </div>
);

export default Lyrics;
