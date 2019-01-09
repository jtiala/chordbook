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
    {({ showLyrics, toggleLyrics }) => (
      <div className={className}>
        <button onClick={toggleLyrics} type="button">
          {showLyrics ? "Hide lyrics" : "Show lyrics"}
        </button>
        <h2>
          {artist && `${artist} - `}
          {title && title}
        </h2>

        {sections &&
          sections.map((section: any, i: number) => (
            <Section
              key={`Section-${i}`}
              {...section}
              showLyrics={showLyrics}
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
`;

export default StyledSong;
