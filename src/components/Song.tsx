import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { firestore } from "../firebase";

import SettingsContext from "../contexts/Settings";

import Error from "./Error";
import Pulse from "./Pulse";
import Section from "./Section";

const Title = styled.h2`
  font-size: 28px;
  font-family: "Caveat Brush", cursive;
  text-align: center;
  color: tomato;
`;

const Separator = styled.span`
  color: black;
`;
interface IProps {
  songId: string;
}

const Song: React.SFC<IProps> = ({ songId }) => {
  const { error, loading, value } = useDocument(
    firestore.doc(`songs/${songId}`)
  );

  if (loading) {
    return <Pulse />;
  }

  if (value) {
    const {
      lyricsVisible,
      chordsVisible,
      toggleLyrics,
      toggleChords
    } = React.useContext(SettingsContext);

    const { artist, title, sections } = value.data();

    return (
      <div>
        <div>
          <Link to="/">Back to song list</Link>&nbsp;
          <button onClick={toggleLyrics} type="button">
            {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
          </button>
          <button onClick={toggleChords} type="button">
            {chordsVisible ? "Hide chords" : "Show chords"}
          </button>
        </div>

        <Title>
          {artist && artist}
          <Separator> - </Separator>
          {title && title}
        </Title>

        {sections &&
          sections.map((section: any, i: number) => (
            <Section
              key={`Section-${i}`}
              {...section}
              lyricsVisible={lyricsVisible}
              chordsVisible={chordsVisible}
            />
          ))}
      </div>
    );
  }

  return <Error>Error{error && `: ${error}`}</Error>;
};

export default Song;
