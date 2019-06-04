import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { firestore } from '../firebase';
import { ISection } from '../types';
import { songIdFromArtistAndTitle } from '../utils';

import Button from './Button';
import Form from './Form';
import Heading from './Heading';
import Input from './Input';
import Label from './Label';
import Message from './Message';
import SectionEditor from './SectionEditor';

interface IProps {
  id?: string;
  artist: string;
  title: string;
  sections: ISection[];
}

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
      const songId = id ? id : songIdFromArtistAndTitle(artist, title);

      firestore
        .collection('songs')
        .doc(songId)
        .delete()
        .catch((err: string) => {
          setError(err);
        });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const songId = id ? id : songIdFromArtistAndTitle(artist, title);

    firestore
      .collection('songs')
      .doc(songId)
      .set({
        artist,
        title,
        sections,
      })
      .then(() => {
        setRedirect(`/songs/${songId}`);
      })
      .catch((err: string) => {
        setError(err);
      });
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
      <Button onClick={handleSectionAdd}>Add section</Button>
      <Button onClick={handleSongDelete} variant="delete">
        Delete Song
      </Button>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
};

export default SongEditor;
