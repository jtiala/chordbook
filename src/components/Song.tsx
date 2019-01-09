import * as React from "react";
import styled from "styled-components";
import Line from "./ChordChart";
import Section from "./Section";

export interface IProps {
  className?: string;
  artist?: string;
  title?: string;
  sections?: any[];
}

const Song: React.SFC<IProps> = ({ className, artist, title, sections }) => (
  <div className={className}>
    <h2>
      {artist && `${artist} - `}
      {title && title}
    </h2>

    {sections &&
      sections.map((section: any, i: number) => (
        <Section key={`Section-${i}`} {...section} />
      ))}
  </div>
);

const StyledSong = styled(Song)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-family: monospace;
`;

export default StyledSong;
