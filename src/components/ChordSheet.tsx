import * as React from "react";
import styled from "styled-components";
import Line from "./Line";
import Section from "./Section";

export interface IProps {
  className?: string;
  artist?: string;
  song: string;
}

const ChordSheet: React.SFC<IProps> = ({ className, artist, song }) => (
  <div className={className}>
    <h2>
      {artist.length ? `${artist} - ` : null}
      {song.length ? song : null}
    </h2>

    <Section title="Verse 1">
      <Line
        chords={[["Cm", "F"], ["A#sus2", "D#sus2"]]}
        lyrics={[
          "Never made it as a wise man",
          "I couldn't cut it as a poor man stealin'"
        ]}
      />
      <Line
        chords={[["Cm", "F"], ["A#sus2", "D#sus2"]]}
        lyrics={[
          "Tired livin' like a blind man",
          "I'm sick inside without a sense of feelin'"
        ]}
      />
    </Section>

    <Section title="Pre-Chorus 1">
      <Line
        chords={[["Cm", "F"], ["A#sus2", "D#sus2"]]}
        lyrics={["And this is how you remind me"]}
      />
      <Line
        chords={[["Cm", "F"], ["A#sus2", "D#sus2"]]}
        lyrics={["This is how you remind me of what I really am"]}
      />
      <Line
        chords={[["Cm", "F"], ["A#sus2", "D#sus2"]]}
        lyrics={["This is how you remind me of what I really am"]}
      />
    </Section>
  </div>
);

const StyledChordSheet = styled(ChordSheet)`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export default StyledChordSheet;
