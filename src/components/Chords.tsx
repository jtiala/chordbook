import * as React from "react";

import ChordLine from "./ChordLine";

interface IProps {
  lines?: any[];
}

const Chords: React.SFC<IProps> = ({ lines }) => (
  <div>
    {lines &&
      lines.map((line: any, i: number) => (
        <ChordLine key={`ChordLine-${i}`} {...line} />
      ))}
  </div>
);

export default Chords;
