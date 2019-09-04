import * as React from "react";
import styled from "styled-components";

import { IBars, IChordLine } from "../types";

import BarEditor from "./BarEditor";
import Button from "./Button";
import ChordLine from "./ChordLine";
import Heading from "./Heading";
import RepeatEditor from "./RepeatEditor";

interface IProps {
  line: IChordLine;
  index: number;
  onChange: (index: number, newChordLine: IChordLine) => void;
  onDelete: (index: number) => void;
}

const ChordLineBarEditorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  > * {
    flex-grow: 1;
  }

  > button {
    flex-grow: 0;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }

  > :last-child {
    margin-bottom: 10px;
  }
`;

const ChordLineContent = styled.div`
  padding: 10px;
  background-color: gainsboro;

  > :not(:last-child) {
    margin-bottom: 10px;
  }

  > :first-child {
    margin: 10px 0 20px 0;
  }
`;

const ChordLineHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 14px;

  > * {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: gainsboro;
  }

  > :not(:last-child) {
    margin-right: 5px;
  }

  > :not(:first-child) {
    opacity: 0.5;

    :hover {
      opacity: 1;
    }
  }
`;

const StyledChordLineEditor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ChordLineEditor: React.SFC<IProps> = ({
  line,
  index,
  onChange,
  onDelete
}) => {
  const bars: IBars = typeof line.bars === "object" ? line.bars : {};

  const parseNewBarsAfterChange = (
    bars: IBars,
    barIndex: number,
    newBar: string[]
  ): IBars => {
    const newBars: IBars = {};

    Object.keys(bars).map((key: string, barI: number) =>
      barI === barIndex ? (newBars[key] = newBar) : (newBars[key] = bars[key])
    );

    return newBars;
  };

  const parseNewBarsAfterDelete = (bars: IBars, barIndex: number): IBars => {
    const newBars: IBars = {};

    Object.keys(bars).map((key: string, i: number) =>
      i !== barIndex ? (newBars[key] = bars[key]) : undefined
    );

    return newBars;
  };

  const handleBarChange = (barIndex: number, newBar: string[]): void => {
    const newBars: IBars = parseNewBarsAfterChange(bars, barIndex, newBar);
    const newChordLine: IChordLine = { ...line, bars: newBars };

    onChange(index, newChordLine);
  };

  const handleBarAdd = (): void => {
    const keys = Object.keys(bars);
    const lastKey = parseInt(keys[keys.length - 1], 10);
    const newKey = lastKey + 1;
    const newBars: IBars = { ...line.bars, [newKey]: ["A", "Bm"] };
    const newChordLine: IChordLine = { ...line, bars: newBars };

    onChange(index, newChordLine);
  };

  const handleBarDelete = (barIndex: number): void => {
    const newBars = parseNewBarsAfterDelete(bars, barIndex);
    const newChordLine: IChordLine = { ...line, bars: newBars };

    onChange(index, newChordLine);
  };

  const handleRepeatChange = (newRepeat: number): void => {
    const newChordLine: IChordLine = { ...line, repeat: newRepeat };
    onChange(index, newChordLine);
  };

  const handleDelete = (): void => {
    const confirmed = window.confirm("Really?");

    if (confirmed) {
      onDelete(index);
    }
  };

  const barElems: React.ReactElement[] = [];

  if (typeof line.bars === "object") {
    Object.keys(line.bars).forEach((key, barIndex) => {
      barElems.push(
        <BarEditor
          key={`bar-${index}-${barIndex}`}
          bar={bars[key]}
          index={barIndex}
          onChange={handleBarChange}
          onDelete={handleBarDelete}
          allowDelete={Object.keys(bars).length > 1}
        />
      );
    });

    barElems.push(
      <Button key={`bar-add`} onClick={handleBarAdd}>
        +
      </Button>
    );
  }

  return (
    <StyledChordLineEditor>
      <ChordLineHeader>
        <Heading level={4}>Chord Line {index + 1}</Heading>
        <Button as="span" onClick={handleDelete}>
          Delete
        </Button>
      </ChordLineHeader>
      <ChordLineContent>
        <ChordLine {...line} />
        <ChordLineBarEditorsContainer>{barElems}</ChordLineBarEditorsContainer>
        <RepeatEditor repeat={line.repeat || 1} onChange={handleRepeatChange} />
      </ChordLineContent>
    </StyledChordLineEditor>
  );
};

export default ChordLineEditor;
