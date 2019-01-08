import * as React from "react";
import styled from "styled-components";

export interface IProps {
  className?: string;
  chords?: string[][];
  lyrics?: string[];
}

const Line: React.SFC<IProps> = ({ className, chords, lyrics }) => (
  <div className={className}>
    <div className="chords">
      {chords.length
        ? chords.map((chordsPerBar, i) =>
            chordsPerBar.map((chord, j) => (
              <span key={`chord-${i}-${j}`}>{chord}</span>
            ))
          )
        : null}
    </div>
    <div className="lyrics">
      {lyrics.length
        ? lyrics.map((lyric, i) => <span key={`lyric-${i}`}>{lyric}</span>)
        : null}
    </div>
  </div>
);

const StyledLine = styled(Line)`
  margin: 10px;
`;

export default StyledLine;
