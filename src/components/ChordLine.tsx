import * as React from "react";
import styled from "styled-components";
import ChordBar from "./ChordBar";

export interface IProps {
  className?: string;
  bars?: string[][];
  repeat?: number;
}

const ChordLine: React.SFC<IProps> = ({ className, bars, repeat }) => (
  <div className={className}>
    {bars &&
      bars.map((bar, i) => {
        const elems = [];

        if (i === 0 && repeat > 1) {
          elems.push(<span>|:</span>);
        } else if (i === 0) {
          elems.push(<span>|&nbsp;</span>);
        }

        elems.push(
          <ChordBar key={`ChordBar-${i}`} chords={bar} barCount={bars.length} />
        );

        if (i === bars.length - 1 && repeat > 1) {
          elems.push(
            <span>
              :|<sup>{repeat}</sup>
            </span>
          );
        } else {
          elems.push(
            <span>
              &nbsp;|<sup>&nbsp;</sup>
            </span>
          );
        }

        return elems;
      })}
  </div>
);

const StyledChordLine = styled(ChordLine)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export default StyledChordLine;
