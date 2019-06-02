import * as React from "react";
import { Redirect } from "react-router-dom";

import { firestore } from "../firebase";
import { ISection } from "../types";
import { songIdFromArtistAndTitle } from "../utils";

import AuthenticatedPage from "./AuthenticatedPage";
import Button from "./Button";
import Form from "./Form";
import Heading from "./Heading";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";
import Pulse from "./Pulse";
import SectionEditor from "./SectionEditor";

const NewSongPage: React.SFC = () => {
  const [artist, setArtist] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [sections, setSections] = React.useState<ISection[]>([
    {
      name: "Verse 1",
      chords: {
        lines: [
          {
            repeat: 1,
            bars: { "1": ["A", "Bm"], "2": ["C#", "Dsus4"] }
          }
        ]
      },
      lyrics: { lines: [] }
    }
  ]);
  const [error, setError] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);

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

  const handleSectionDelete = (index: number) => {
    setSections(sections.filter((section, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = songIdFromArtistAndTitle(artist, title);

    firestore
      .collection("songs")
      .doc(id)
      .set({
        artist,
        title,
        sections
      })
      .then(() => {
        setRedirect(`/songs/${id}`);
      })
      .catch((err: string) => {
        setError(err);
      });
  };

  const addSection = () => {
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
    <AuthenticatedPage variant="stretch">
      <Heading level={1} variant="primary">
        Create Song
      </Heading>
      <Form onSubmit={handleSubmit} variant="stretch">
        {error && <Message variant="error">error</Message>}
        <Heading level={2}>Details</Heading>
        <Label label="Artist">
          <Input type="text" onChange={handleArtistChange} value={artist} />
        </Label>
        <Label label="Title">
          <Input type="text" onChange={handleTitleChange} value={title} />
        </Label>
        <Heading level={2}>Sections</Heading>
        {sectionEditors}
        <Button onClick={addSection}>Add section</Button>
        <Button type="submit" variant="primary">
          Create
        </Button>
      </Form>
    </AuthenticatedPage>
  );
};

export default NewSongPage;
