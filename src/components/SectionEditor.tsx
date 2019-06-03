import * as React from "react";
import styled from "styled-components";

import { IChordLine, IChords, ILyrics, ISection } from "../types";

import Button from "./Button";
import ChordsEditor from "./ChordsEditor";
import Input from "./Input";
import Label from "./Label";
import LyricsEditor from "./LyricsEditor";

interface IProps {
  section: ISection;
  index: number;
  onChange: (index: number, section: ISection) => void;
  onDelete: (index: number) => void;
}

const StyledSectionEditor = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: whitesmoke;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const NameAndButtonsContainer = styled.div`
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

const SectionEditor: React.SFC<IProps> = ({
  section,
  index,
  onChange,
  onDelete
}) => {
  const { name, chords, lyrics } = section;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(index, { ...section, name: e.target.value });
  };

  const handleChordsChange = (newChords: IChords) => {
    onChange(index, { ...section, chords: newChords });
  };

  const handleLyricsChange = (newLyrics: ILyrics) => {
    onChange(index, { ...section, lyrics: newLyrics });
  };

  const handleChordLineAdd = () => {
    const newChordLine: IChordLine = {
      repeat: 1,
      bars: { "1": ["A", "Bm"], "2": ["C#", "Dsus4"] }
    };

    const newChords = chords
      ? {
          ...chords,
          lines: [...chords.lines, newChordLine]
        }
      : { lines: [newChordLine] };

    onChange(index, {
      ...section,
      chords: newChords
    });
  };

  const handleChordLineDelete = (i: number) => {
    onChange(index, {
      ...section,
      chords: {
        ...chords,
        lines: section.chords.lines.filter((line, lineI) => lineI !== i)
      }
    });
  };

  const handleSectionDelete = () => {
    const confirmed = confirm("Really?");

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
      <ChordsEditor
        chords={chords}
        onChange={handleChordsChange}
        onChordLineDelete={handleChordLineDelete}
      />
      <LyricsEditor lyrics={lyrics} onChange={handleLyricsChange} />
    </StyledSectionEditor>
  );
};

export default SectionEditor;
