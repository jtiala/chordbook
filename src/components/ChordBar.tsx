import * as React from "react";
import styled from "styled-components";
import Chord from "./Chord";

export interface IProps {
  className?: string;
  chords?: string[];
  barCount: number;
}

const ChordBar: React.SFC<IProps> = ({ className, chords }) => (
  <div className={className}>
    {chords &&
      chords.map((chord, i) => <Chord key={`Chord-${i}`}>{chord}</Chord>)}
  </div>
);

const StyledChordBar = styled(ChordBar)`
  display: flex;
  flex-direction: row;
  flex-basis: ${props => 100 / props.barCount}%;
  justify-content: space-evenly;
`;

export default StyledChordBar;
