import * as React from "react";
import styled from "styled-components";

import { IChords, ILyrics, ISection } from "../types";

import ChordsEditor from "./ChordsEditor";
import Input from "./Input";
import Label from "./Label";
import LyricsEditor from "./LyricsEditor";

interface IProps {
  section: ISection;
  index: number;
  onChange: (index: number, section: ISection) => void;
}

const StyledSectionEditor = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: whitesmoke;
`;

const SectionEditor: React.SFC<IProps> = ({ section, index, onChange }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    onChange(index, { ...section, name });
  };

  const handleChordsChange = (chords: IChords) => {
    onChange(index, { ...section, chords });
  };

  const handleLyricsChange = (lyrics: ILyrics) => {
    onChange(index, { ...section, lyrics });
  };

  return (
    <StyledSectionEditor>
      <Label label="Name">
        <Input value={section.name} onChange={handleNameChange} />
      </Label>
      <ChordsEditor chords={section.chords} onChange={handleChordsChange} />
      <LyricsEditor lyrics={section.lyrics} onChange={handleLyricsChange} />
    </StyledSectionEditor>
  );
};

export default SectionEditor;
