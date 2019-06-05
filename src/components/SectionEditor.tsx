import * as React from 'react';
import styled from 'styled-components';

import { IChords, ILyrics, ISection } from '../types';

import Button from './Button';
import Heading from './Heading';
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

const SectionContent = styled.div`
  padding: 10px;
  background-color: whitesmoke;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const SectionHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 14px;

  > * {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: whitesmoke;
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

const StyledSectionEditor = styled.div`
  margin: 10px 0;
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

  const handleSectionDelete = (): void => {
    const confirmed = confirm('Really?');

    if (confirmed) {
      onDelete(index);
    }
  };

  return (
    <StyledSectionEditor>
      <SectionHeader>
        <Heading level={3}>{name}</Heading>
        <Button as="span" onClick={handleSectionDelete}>
          Delete
        </Button>
      </SectionHeader>
      <SectionContent>
        <Label label="Name">
          <Input value={name} onChange={handleNameChange} />
        </Label>
        <LyricsEditor lyrics={lyrics} onChange={handleLyricsChange} />
        <ChordsEditor chords={chords} onChange={handleChordsChange} />
      </SectionContent>
    </StyledSectionEditor>
  );
};

export default SectionEditor;
