import * as React from "react";
import styled from "styled-components";
import ChordChart from "./ChordChart";
import Lyrics from "./Lyrics";

export interface IProps {
  className?: string;
  name?: string;
  chordChart?: any;
  lyrics?: any;
}

const Section: React.SFC<IProps> = ({
  className,
  name,
  chordChart,
  lyrics
}) => (
  <div className={className}>
    {name && <strong>{name}</strong>}
    {chordChart && <ChordChart {...chordChart} />}
    {lyrics && <Lyrics {...lyrics} />}
  </div>
);

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  width: 480px;
  background: #eee;
`;

export default StyledSection;
