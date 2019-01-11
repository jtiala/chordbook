import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components";

import { firestore } from "../firebase";

import { SettingsConsumer } from "../contexts/Settings";

import Section from "./Section";

export interface IProps {
  className?: string;
  songRef?: string;
}

const Song: React.SFC<IProps> = ({ className, songRef }) => {
  const { error, loading, value } = useDocument(firestore.doc(songRef));

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

const StyledSong = styled(Song)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export default StyledSong;
