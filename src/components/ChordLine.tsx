import * as React from 'react';
import styled from 'styled-components';

import { IChordLine } from '../types';

import ChordBar from './ChordBar';

const StyledChordLine = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 10px 0;
  font-size: 28px;
  font-family: 'Caveat Brush', cursive;
`;

const BarLine = styled.span`
  flex-grow: 0;
  color: tomato;
`;

const ChordLine: React.SFC<IChordLine> = ({ bars, repeat }) => {
  const barKeys = Object.keys(bars)
    .map((key) => parseInt(key, 10))
    .sort((a: number, b: number) => a - b);
  const barCount = barKeys.length;

  return (
    <StyledChordLine>
      {barCount > 0 &&
        barKeys.map((key: number, i: number) => {
          const bar = bars[key];
          const elems = [];

          if (i === 0 && repeat > 1) {
            elems.push(<BarLine key={`BarLine-${i}-0`}>|:</BarLine>);
          } else if (i === 0) {
            elems.push(<BarLine key={`BarLine-${i}-0`}>|</BarLine>);
          }

          elems.push(<ChordBar key={`ChordBar-${i}`} chords={bar} barCount={barCount} />);

          if (i === barCount - 1 && repeat > 1) {
            elems.push(
              <BarLine key={`BarLine-${i}-1`}>
                :|<sup>{repeat}</sup>
              </BarLine>,
            );
          } else {
            elems.push(
              <BarLine key={`BarLine-${i}-1`}>
                &nbsp;|<sup>&nbsp;</sup>
              </BarLine>,
            );
          }

          return elems;
        })}
    </StyledChordLine>
  );
};

export default ChordLine;
