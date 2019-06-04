import * as React from 'react';
import styled from 'styled-components';

import { IChordLine, IChords, ILyrics, ISection } from '../types';

import Button from './Button';
import ChordsEditor from './ChordsEditor';
import Input from './Input';
import Label from './Label';
import LyricsEditor from './LyricsEditor';

interface IProps {
  section: ISection;
  index: number;
  onChange: (index: number, section: ISection) => void;
  onDelete: (index: number) => void;
}

const NameAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  > :not(button) {
    flex-grow: 1;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledSectionEditor = styled.div`
  padding: 10px;
  margin: 10px 0;
  background-color: whitesmoke;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const SectionEditor: React.SFC<IProps> = ({ section, index, onChange, onDelete }) => {
  const { name, chords, lyrics } = section;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(index, { ...section, name: e.target.value });
  };

  const handleChordsChange = (newChords: IChords): void => {
    onChange(index, { ...section, chords: newChords });
  };

  const handleLyricsChange = (newLyrics: ILyrics): void => {
    onChange(index, { ...section, lyrics: newLyrics });
  };

  const handleChordLineAdd = (): void => {
    const newChordLine: IChordLine = {
      repeat: 1,
      bars: { '1': ['A', 'Bm'], '2': ['C#', 'Dsus4'] },
    };

    const newChords = chords
      ? {
          ...chords,
          lines: [...chords.lines, newChordLine],
        }
      : { lines: [newChordLine] };

    onChange(index, {
      ...section,
      chords: newChords,
    });
  };

  const handleChordLineDelete = (i: number): void => {
    onChange(index, {
      ...section,
      chords: {
        ...chords,
        lines: section.chords.lines.filter((line, lineI) => lineI !== i),
      },
    });
  };

  const handleSectionDelete = (): void => {
    const confirmed = confirm('Really?');

    if (confirmed) {
      onDelete(index);
    }
  };

  return (
    <StyledSectionEditor>
      <NameAndButtonsContainer>
        <Label label="Name">
          <Input value={name} onChange={handleNameChange} />
        </Label>
        <Button variant="delete" onClick={handleSectionDelete}>
          Delete section
        </Button>
        <Button onClick={handleChordLineAdd}>Add chord line</Button>
      </NameAndButtonsContainer>
      <ChordsEditor chords={chords} onChange={handleChordsChange} onChordLineDelete={handleChordLineDelete} />
      <LyricsEditor lyrics={lyrics} onChange={handleLyricsChange} />
    </StyledSectionEditor>
  );
};

export default SectionEditor;
