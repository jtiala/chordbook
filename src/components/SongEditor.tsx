import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";

import { firestore } from "../firebase";
import { ISection } from "../types";
import { songIdFromArtistAndTitle } from "../utils";

import Button from "./Button";
import Form from "./Form";
import Heading from "./Heading";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";
import Pulse from "./Pulse";
import SectionEditor from "./SectionEditor";

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
  sections: initialSections
}) => {
  const [error, setError] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);
  const [artist, setArtist] = React.useState(initialArtist);
  const [title, setTitle] = React.useState(initialTitle);
  const [sections, setSections] = React.useState<ISection[]>(initialSections);

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSectionChange = (index: number, newSection: ISection) => {
    setSections(
      sections.map((section, i) => (i === index ? newSection : sections[i]))
    );
  };

  const handleSectionAdd = () => {
    const newSection: ISection = {
      name: "Chorus",
      chords: {
        lines: [
          {
            repeat: 1,
            bars: { "1": ["A", "Bm"], "2": ["C#", "Dsus4"] }
          }
        ]
      },
      lyrics: { lines: [] }
    };

    setSections([...sections, newSection]);
  };

  const handleSectionDelete = (index: number) => {
    setSections(sections.filter((section, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const songId = id ? id : songIdFromArtistAndTitle(artist, title);

    firestore
      .collection("songs")
      .doc(songId)
      .set({
        artist,
        title,
        sections
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
      />
    );
  });

  return (
    <Form onSubmit={handleSubmit} variant="stretch">
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
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
};

export default SongEditor;
