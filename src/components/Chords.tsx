import * as React from "react";
import styled from "styled-components";
import ChordLine from "./ChordLine";

export interface IProps {
  className?: string;
  lines?: any[];
}

const Chords: React.SFC<IProps> = ({ className, lines }) => (
  <div className={className}>
    {lines &&
      lines.map((line: any, i: number) => (
        <ChordLine key={`ChordLine-${i}`} {...line} />
      ))}
  </div>
);

const StyledChords = styled(Chords)`
  display: flex;
  flex-direction: column;
`;

export default StyledChords;
