import * as React from "react";

import { IChords, IChordLine } from "../types";

import ChordLine from "./ChordLine";

const Chords: React.SFC<IChords> = ({ lines }) => (
  <div>
    {lines &&
      lines.map((line: IChordLine, i: number) => (
        <ChordLine key={`ChordLine-${i}`} {...line} />
      ))}
  </div>
);

export default Chords;
