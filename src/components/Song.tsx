import * as React from "react";
import styled from "styled-components";
import { SettingsConsumer } from "../contexts/Settings";
import Line from "./ChordChart";
import Section from "./Section";

export interface IProps {
  className?: string;
  artist?: string;
  title?: string;
  sections?: any[];
}

const Song: React.SFC<IProps> = ({ className, artist, title, sections }) => (
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

const StyledSong = styled(Song)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-family: monospace;
  margin-top: 5px;
`;

export default StyledSong;
