import * as React from "react";

import { firestore } from "../firebase";
import { songIdFromArtistAndTitle } from "../utils";

import AuthenticatedPage from "./AuthenticatedPage";
import Heading from "./Heading";
import Message from "./Message";
import Pulse from "./Pulse";

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
      <form onSubmit={handleSubmit}>
        <Heading level={1} variant="primary">
          Create Song
        </Heading>
        <input
          type="text"
          placeholder="Artist"
          // tslint:disable-next-line
          onChange={e => setArtist(e.target.value)}
          value={artist}
        />
        <input
          type="text"
          placeholder="Title"
          // tslint:disable-next-line
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          rows={20}
          // tslint:disable-next-line
          onChange={e => setSections(JSON.parse(e.target.value))}
          value={JSON.stringify(sections, null, 2)}
        />
        <button type="submit">Create</button>
      </form>
    </AuthenticatedPage>
  );
};

export default NewSongPage;
