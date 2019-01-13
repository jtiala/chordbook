import * as React from "react";
import styled from "styled-components";
import Chords from "./Chords";
import Lyrics from "./Lyrics";

export interface IProps {
  className?: string;
  name?: string;
  chords?: any;
  lyrics?: any;
  lyricsVisible: boolean;
  chordsVisible: boolean;
}

const Section: React.SFC<IProps> = ({
  className,
  name,
  chords,
  lyrics,
  lyricsVisible,
  chordsVisible
}) => (
  <div className={className}>
    {name && <strong>{name}</strong>}
    {chordsVisible && chords && <Chords {...chords} />}
    {lyricsVisible && lyrics && <Lyrics {...lyrics} />}
  </div>
);

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  width: 480px;
  max-width: 90%;
  background: #eee;
`;

export default StyledSection;
