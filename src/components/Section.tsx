import * as React from "react";
import styled from "styled-components";
import ChordChart from "./ChordChart";
import Lyrics from "./Lyrics";

export interface IProps {
  className?: string;
  name?: string;
  chordChart?: any;
  lyrics?: any;
  lyricsVisible: boolean;
  chordsVisible: boolean;
}

const Section: React.SFC<IProps> = ({
  className,
  name,
  chordChart,
  lyrics,
  lyricsVisible,
  chordsVisible
}) => (
  <div className={className}>
    {name && <strong>{name}</strong>}
    {chordsVisible && chordChart && <ChordChart {...chordChart} />}
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
