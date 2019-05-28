import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase";
import { songIdFromArtistAndTitle } from "../utils";
import Pulse from "./Pulse";
import Error from "./Error";

const LoginForm: React.SFC = () => {
  const [user, loading, error] = useAuthState(auth);
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
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  if (loading) {
    return <Pulse />;
  }

  if (user) {
    return (
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Create Song</h2>
        <input
          type="text"
          placeholder="Artist"
          onChange={e => setArtist(e.target.value)}
          value={artist}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          rows={20}
          onChange={e => setSections(JSON.parse(e.target.value))}
          value={JSON.stringify(sections, null, 2)}
        />
        <button type="submit">Create</button>
      </form>
    );
  }

  return <Error>Error{error && `: ${error}`}</Error>;
};

export default LoginForm;
