import * as React from "react";
import styled from "styled-components";
import ChordLine from "./ChordLine";

export interface IProps {
  className?: string;
  lines?: any[];
}

const ChordChart: React.SFC<IProps> = ({ className, lines }) => (
  <div className={className}>
    {lines &&
      lines.map((line: any, i: number) => (
        <ChordLine key={`ChordLine-${i}`} {...line} />
      ))}
  </div>
);

const StyledChordChart = styled(ChordChart)`
  display: flex;
  flex-direction: column;
`;

export default StyledChordChart;
