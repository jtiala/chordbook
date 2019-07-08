import * as React from 'react';
import Ajv from 'ajv';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, firestore } from '../firebase';
import { ISection, ISong } from '../types';
import { slugFromArtistAndTitle } from '../utils';
import schema from '../song-schema.json';

import Button from './Button';
import Form from './Form';
import Heading from './Heading';
import Input from './Input';
import Label from './Label';
import Message from './Message';
import SectionEditor from './SectionEditor';
import JSONEditor from './JSONEditor';

interface IProps {
  id?: string;
  artist: string;
  title: string;
  sections: ISection[];
}

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    flex-grow: 1;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledSongEditor = styled.div`
  display: flex;
  flex-direction: column;

  > form > button {
    align-self: flex-end;
  }
`;

const SongEditor: React.SFC<IProps> = ({
  id,
  artist: initialArtist,
  title: initialTitle,
  sections: initialSections,
}) => {
  const [error, setError] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);
  const [artist, setArtist] = React.useState(initialArtist);
  const [title, setTitle] = React.useState(initialTitle);
  const [sections, setSections] = React.useState<ISection[]>(initialSections);
  const [user] = useAuthState(auth);

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setArtist(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSectionChange = (index: number, newSection: ISection): void => {
    setSections(sections.map((section, i) => (i === index ? newSection : sections[i])));
  };

  const handleSectionAdd = (): void => {
    const newSection: ISection = {
      name: 'Chorus',
      chords: {
        lines: [
          {
            repeat: 1,
            bars: { '1': ['A', 'Bm'], '2': ['C#', 'Dsus4'] },
          },
        ],
      },
      lyrics: { lines: [] },
    };

    setSections([...sections, newSection]);
  };

  const handleSectionDelete = (index: number): void => {
    setSections(sections.filter((section, i) => i !== index));
  };

  const handleSongDelete = (): void => {
    const confirmed = confirm('Really?');

    if (confirmed) {
      if (id) {
        firestore
          .collection('songs')
          .doc(id)
          .delete()
          .catch((err: string) => {
            setError(err);
          });
      }

      setRedirect('/');
    }
  };

  const parseSongData = (data: string): ISong => {
    try {
      const songData: ISong = JSON.parse(data);
      const ajv = new Ajv();
      const valid = ajv.validate(schema, songData);

      if (!valid) {
        throw new Error('Validation error.');
      }

      return songData;
    } catch (error) {
      alert(`Song data parsing failed\n\n${error.message}`);
      return undefined;
    }
  };

  const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const songData = parseSongData(e.target.value);

    if (songData) {
      const newArtist = songData.artist;
      const newTitle = songData.title;
      const newSections = songData.sections;

      if (newArtist !== artist) {
        setArtist(newArtist);
      } else if (newTitle !== title) {
        setTitle(newTitle);
      } else {
        setSections(newSections);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (user) {
      firestore
        .collection('songs')
        .add({
          artist,
          title,
          sections,
          uid: user.uid,
        })
        .then((documentReference) => {
          const slug = slugFromArtistAndTitle(artist, title);
          setRedirect(`/songs/${documentReference.id}/${slug}`);
        })
        .catch((err: string) => {
          setError(err);
        });
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  const sectionEditors: React.ReactElement[] = [];

  sections.forEach((section, index) => {
    sectionEditors.push(
      <SectionEditor
        key={`section-editor-${index}`}
        section={section}
        index={index}
        onChange={handleSectionChange}
        onDelete={handleSectionDelete}
      />,
    );
  });

  return (
    <StyledSongEditor>
      <Form onSubmit={handleSubmit}>
        {error && <Message variant="error">Error: {error}</Message>}
        <Heading level={2}>Details</Heading>
        <Label label="Artist">
          <Input type="text" onChange={handleArtistChange} value={artist} />
        </Label>
        <Label label="Title">
          <Input type="text" onChange={handleTitleChange} value={title} />
        </Label>
        <Heading level={2}>Sections</Heading>
        {sectionEditors}
        <Button onClick={handleSectionAdd}>+ Add section</Button>
        <JSONEditor artist={artist} title={title} sections={sections} onChange={handleJSONChange} />
        <ActionsContainer>
          <Button onClick={handleSongDelete}>Delete Song</Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </ActionsContainer>
      </Form>
    </StyledSongEditor>
  );
};

export default SongEditor;
