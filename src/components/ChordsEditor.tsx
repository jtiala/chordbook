import * as React from "react";
import styled from "styled-components";

import { IBars, IChordLine, IChords } from "../types";

import BarEditor from "./BarEditor";
import Button from "./Button";
import ChordLine from "./ChordLine";
import Heading from "./Heading";
import Input from "./Input";
import Label from "./Label";
import RepeatEditor from "./RepeatEditor";

interface IProps {
  chords: IChords;
  onChange: (chords: IChords) => void;
}

const LineElemsContainer = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background-color: gainsboro;
`;

const LineElemInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  > :not(:last-child) {
    margin-right: 3px;
  }
`;

const ChordsEditor: React.SFC<IProps> = ({ chords, onChange }) => {
  const { lines } = chords;

  const parseNewBars = (bars: IBars, barIndex: number, newBar: string[]) => {
    const newBars: IBars = {};

    Object.keys(bars).map((key: string, barI: number) =>
      barI === barIndex ? (newBars[key] = newBar) : (newBars[key] = bars[key])
    );

    return newBars;
  };

  const handleBarChange = (
    newBar: string[],
    lineIndex: number,
    barIndex: number
  ) => {
    const newChordLines: IChordLine[] = chords.lines.map(
      (line: IChordLine, lineI: number) =>
        lineI === lineIndex
          ? { ...line, bars: parseNewBars(line.bars, barIndex, newBar) }
          : line
    );

    onChange({ ...chords, lines: newChordLines });
  };

  const handleRepeatChange = (newRepeat: number, lineIndex: number) => {
    const newChordLines: IChordLine[] = chords.lines.map(
      (line: IChordLine, lineI: number) =>
        lineI === lineIndex ? { ...line, repeat: newRepeat } : line
    );

    onChange({ ...chords, lines: newChordLines });
  };

  const addChordLine = () => {
    const newChordLine: IChordLine = {
      repeat: 1,
      bars: { "1": ["A", "Bm"], "2": ["C#", "Dsus4"] }
    };
    onChange({ ...chords, lines: [...chords.lines, newChordLine] });
  };

  const addBar = (e: React.MouseEvent<HTMLButtonElement>) => {
    const lineIndex = parseInt(e.currentTarget.value, 10);
    const keys = Object.keys(lines[lineIndex].bars);
    const lastKey = parseInt(keys[keys.length - 1], 10);
    const newKey = lastKey + 1;
    const newBar: string[] = ["A", "Bm"];
    const newChordLines: IChordLine[] = chords.lines.map(
      (line: IChordLine, lineI: number) =>
        lineI === lineIndex
          ? { ...line, bars: { ...line.bars, [newKey]: newBar } }
          : line
    );
    onChange({ ...chords, lines: newChordLines });
  };

  const lineElems: React.ReactElement[] = [];

  if (lines) {
    lines.forEach((line, lineIndex) => {
      const barElems: React.ReactElement[] = [];

      if (line.bars) {
        Object.keys(line.bars).forEach((key, barIndex) => {
          barElems.push(
            <BarEditor
              key={`bar-${lineIndex}-${barIndex}`}
              bar={line.bars[key]}
              lineIndex={lineIndex}
              barIndex={barIndex}
              onChange={handleBarChange}
            />
          );
        });
      }

      lineElems.push(
        <LineElemsContainer key={`line-${lineIndex}`}>
          <ChordLine {...line} />
          <LineElemInputsContainer>
            {barElems}
            <RepeatEditor
              repeat={line.repeat}
              lineIndex={lineIndex}
              onChange={handleRepeatChange}
            />
          </LineElemInputsContainer>
          <Button onClick={addBar} value={lineIndex}>
            Add bar
          </Button>
        </LineElemsContainer>
      );
    });
  }

  return (
    <React.Fragment>
      <Heading level={3}>Chords</Heading>
      {lineElems}
      <Button onClick={addChordLine}>Add chord line</Button>
    </React.Fragment>
  );
};

export default ChordsEditor;
