import * as React from "react";
import styled from "styled-components";

import SettingsContext from "../contexts/Settings";

import Chords from "./Chords";
import Lyrics from "./Lyrics";

const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  color: black;
`;

interface IProps {
  className?: string;
  name?: string;
  chords?: any;
  lyrics?: any;
}

const Section: React.SFC<IProps> = ({ className, name, chords, lyrics }) => {
  const { lyricsVisible, chordsVisible } = React.useContext(SettingsContext);

  return (
    <div className={className}>
      {name && <Title>{name}</Title>}
      {chordsVisible && chords && <Chords {...chords} />}
      {lyricsVisible && lyrics && <Lyrics {...lyrics} />}
    </div>
  );
};

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  background: whitesmoke;
`;

export default StyledSection;
