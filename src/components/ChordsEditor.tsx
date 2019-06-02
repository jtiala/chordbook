import * as React from "react";
import styled from "styled-components";

import { IBars, IChordLine, IChords } from "../types";

import BarEditor from "./BarEditor";
import Button from "./Button";
import ChordLine from "./ChordLine";
import Heading from "./Heading";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";
import RepeatEditor from "./RepeatEditor";

interface IProps {
  chords: IChords;
  onChange: (chords: IChords) => void;
  onChordLineDelete: (index: number) => void;
}

const ChordLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  background-color: gainsboro;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ChordLineNameAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  > :not(:last-child) {
    margin-right: 10px;
  }

  > :not(button) {
    flex-grow: 1;
  }
`;

const ChordLineInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  > * {
    flex-grow: 1;
  }

  > button {
    flex-grow: 0;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const ChordsEditor: React.SFC<IProps> = ({
  chords,
  onChange,
  onChordLineDelete
}) => {
  const { lines } = chords;

  const parseNewBarsAfterAdd = (
    bars: IBars,
    barIndex: number,
    newBar: string[]
  ) => {
    const newBars: IBars = {};

    Object.keys(bars).map((key: string, barI: number) =>
      barI === barIndex ? (newBars[key] = newBar) : (newBars[key] = bars[key])
    );

    return newBars;
  };

  const parseNewBarsAfterDelete = (bars: IBars, barIndex: number) => {
    const newBars: IBars = {};

    Object.keys(bars).map((key: string, barI: number) =>
      barI !== barIndex ? (newBars[key] = bars[key]) : undefined
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
          ? { ...line, bars: parseNewBarsAfterAdd(line.bars, barIndex, newBar) }
          : line
    );

    onChange({ ...chords, lines: newChordLines });
  };

  const handleBarAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const handleBarDelete = (lineIndex: number, barIndex: number) => {
    const newChordLines: IChordLine[] = chords.lines.map(
      (line: IChordLine, lineI: number) =>
        lineI === lineIndex
          ? {
              ...line,
              bars: parseNewBarsAfterDelete(line.bars, barIndex)
            }
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

  const handleChordLineDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = confirm("Really?");

    if (confirmed) {
      const lineIndex = parseInt(e.currentTarget.value, 10);
      onChordLineDelete(lineIndex);
    }
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
              onDelete={handleBarDelete}
              allowDelete={Object.keys(line.bars).length > 1}
            />
          );
        });
      }

      lineElems.push(
        <ChordLineContainer key={`line-${lineIndex}`}>
          <Heading level={3}>Chord Line {lineIndex + 1}</Heading>
          <ChordLine {...line} />
          <ChordLineInputsContainer>{barElems}</ChordLineInputsContainer>
          <ChordLineNameAndButtonsContainer>
            <RepeatEditor
              repeat={line.repeat}
              lineIndex={lineIndex}
              onChange={handleRepeatChange}
            />
            <Button
              variant="delete"
              onClick={handleChordLineDelete}
              value={lineIndex}
            >
              Delete chord line
            </Button>
            <Button onClick={handleBarAdd} value={lineIndex}>
              Add bar
            </Button>
          </ChordLineNameAndButtonsContainer>
        </ChordLineContainer>
      );
    });
  }

  return (
    <React.Fragment>
      <Heading level={3}>Chords</Heading>
      {lineElems.length > 0 ? lineElems : <Message>No chords.</Message>}
    </React.Fragment>
  );
};

export default ChordsEditor;
