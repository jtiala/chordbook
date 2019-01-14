import * as React from "react";
import styled from "styled-components";
import ChordBar from "./ChordBar";

interface IProps {
  className?: string;
  bars?: string[][];
  repeat?: number;
}

const ChordLine: React.SFC<IProps> = ({ className, bars, repeat }) => {
  const barKeys = Object.keys(bars)
    .map(key => parseInt(key, 10))
    .sort((a: any, b: any) => a - b);
  const barCount = barKeys.length;

  return (
    <div className={className}>
      {barCount &&
        barKeys.map((key: number, i: number) => {
          const bar = bars[key];
          const elems = [];

          if (i === 0 && repeat > 1) {
            elems.push(<span key={`BarLine-${i}-0`}>|:</span>);
          } else if (i === 0) {
            elems.push(<span key={`BarLine-${i}-0`}>|&nbsp;</span>);
          }

          elems.push(
            <ChordBar key={`ChordBar-${i}`} chords={bar} barCount={barCount} />
          );

          if (i === barCount - 1 && repeat > 1) {
            elems.push(
              <span key={`BarLine-${i}-1`}>
                :|<sup>{repeat}</sup>
              </span>
            );
          } else {
            elems.push(
              <span key={`BarLine-${i}-1`}>
                &nbsp;|<sup>&nbsp;</sup>
              </span>
            );
          }

          return elems;
        })}
    </div>
  );
};

const StyledChordLine = styled(ChordLine)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 28px;
  font-family: "Caveat Brush", cursive;
`;

export default StyledChordLine;
