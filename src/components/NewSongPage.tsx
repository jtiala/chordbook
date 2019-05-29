import * as React from "react";

import { firestore } from "../firebase";
import { songIdFromArtistAndTitle } from "../utils";

import AuthenticatedPage from "./AuthenticatedPage";
import Button from "./Button";
import Form from "./Form";
import Heading from "./Heading";
import Input from "./Input";
import Message from "./Message";
import Pulse from "./Pulse";
import Textarea from "./Textarea";

const NewSongPage: React.SFC = () => {
  const [artist, setArtist] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [sections, setSections] = React.useState([
    {
      chords: {
        lines: [
          {
            bars: {
              "1": ["Fm", "G#"],
              "2": ["D#", "A#"]
            },
            repeat: 2
          }
        ]
      },
      lyrics: {
        lines: [
          "I walk a lonely road",
          "The only one that I have ever known",
          "Don't know where it goes",
          "But it's home to me, and I walk alone"
        ]
      },
      name: "Verse 1"
    }
  ]);

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSectionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSections(JSON.parse(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firestore
      .collection("songs")
      .doc(songIdFromArtistAndTitle(artist, title))
      .set({
        artist,
        title,
        sections
      })
      .then(() => {
        console.log("Document successfully written!"); // tslint:disable-line
      })
      .catch((err: string) => {
        console.error("Error writing document: ", err); // tslint:disable-line
      });
  };

  return (
    <AuthenticatedPage>
      <Form onSubmit={handleSubmit}>
        <Heading level={1} variant="primary">
          Create Song
        </Heading>
        <Input
          type="text"
          placeholder="Artist"
          onChange={handleArtistChange}
          value={artist}
        />
        <Input
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
        />
        <Textarea
          rows={20}
          onChange={handleSectionsChange}
          value={JSON.stringify(sections, null, 2)}
        />
        <Button type="submit" variant="primary">
          Create
        </Button>
      </Form>
    </AuthenticatedPage>
  );
};

export default NewSongPage;
