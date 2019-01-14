import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { firestore } from "../firebase";

import { SettingsConsumer } from "../contexts/Settings";

import Section from "./Section";

interface IProps {
  className?: string;
  songId: string;
}

const Song: React.SFC<IProps> = ({ className, songId }) => {
  const { error, loading, value } = useDocument(
    firestore.doc(`songs/${songId}`)
  );

  if (loading) {
    return (
      <div className={className}>
        <p>Loading...</p>
      </div>
    );
  }

  if (value) {
    const { artist, title, sections } = value.data();

    return (
      <SettingsConsumer>
        {({ lyricsVisible, chordsVisible, toggleLyrics, toggleChords }) => (
          <div className={className}>
            <div>
              <Link to="/">Back to song list</Link>&nbsp;
              <button onClick={toggleLyrics} type="button">
                {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
              </button>
              <button onClick={toggleChords} type="button">
                {chordsVisible ? "Hide chords" : "Show chords"}
              </button>
            </div>

            <h2>
              {artist && `${artist} - `}
              {title && title}
            </h2>

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
        )}
      </SettingsConsumer>
    );
  }

  return (
    <div className={className}>
      <p>Error{error && `: ${error}`}</p>
    </div>
  );
};

const StyledSong = styled(Song)``;

export default StyledSong;
