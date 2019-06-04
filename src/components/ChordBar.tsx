import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  chords?: string[];
  barCount: number;
}

const StyledChordBar = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-basis: ${(props) => 100 / props.barCount}%;
  justify-content: space-around;
`;

const Chord = styled.span`
  padding: 0 3px;
`;

const ChordBar: React.SFC<IProps> = ({ chords, barCount }) => (
  <StyledChordBar barCount={barCount}>
    {chords && chords.filter((chord) => chord.length > 0).map((chord, i) => <Chord key={`Chord-${i}`}>{chord}</Chord>)}
  </StyledChordBar>
);

export default ChordBar;
