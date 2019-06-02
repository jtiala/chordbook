import * as React from "react";

import { IChords } from "../types";

import ChordLine from "./ChordLine";

const Chords: React.SFC<IChords> = ({ lines }) => (
  <div>
    {lines &&
      lines.map((line: any, i: number) => (
        <ChordLine key={`ChordLine-${i}`} {...line} />
      ))}
  </div>
);

export default Chords;
