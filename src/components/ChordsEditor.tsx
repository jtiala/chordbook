import * as React from 'react';
import styled from 'styled-components';

import { IChordLine, IChords } from '../types';

import Button from './Button';
import ChordLineEditor from './ChordLineEditor';

interface IProps {
  chords?: IChords;
  onChange: (chords: IChords) => void;
}

const StyledChordsEditor = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    align-self: flex-end;
  }
`;

const ChordsEditor: React.SFC<IProps> = ({ chords, onChange }) => {
  const lines: IChordLine[] = chords ? chords.lines : [];

  const handleChordLineAdd = (): void => {
    const newChordLine: IChordLine = {
      repeat: 1,
      bars: { '1': ['A', 'Bm'], '2': ['C#', 'Dsus4'] },
    };

    const newChords: IChords = chords
      ? {
          ...chords,
          lines: [...chords.lines, newChordLine],
        }
      : { lines: [newChordLine] };

    onChange(newChords);
  };

  const handleChordLineChange = (index: number, newChordLine: IChordLine): void => {
    const newChords = {
      ...chords,
      lines: chords.lines.map((line, i) => (i === index ? newChordLine : line)),
    };

    onChange(newChords);
  };

  const handleChordLineDelete = (index: number): void => {
    const newChords = {
      ...chords,
      lines: chords.lines.filter((line, i) => i !== index),
    };

    onChange(newChords);
  };

  const lineElems: React.ReactElement[] = [];

  if (lines) {
    lines.forEach((line, index) => {
      lineElems.push(
        <ChordLineEditor
          key={`line-${index}`}
          line={line}
          index={index}
          onChange={handleChordLineChange}
          onDelete={handleChordLineDelete}
        />,
      );
    });
  }

  return (
    <StyledChordsEditor>
      {lineElems}
      <Button onClick={handleChordLineAdd}>+ Add chord line</Button>
    </StyledChordsEditor>
  );
};

export default ChordsEditor;
