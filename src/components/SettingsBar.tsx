import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SettingsContext from "../contexts/Settings";

import Button from "./Button";

const StyledSettingsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  margin: 10px 0;
  background: whitesmoke;
`;

const SettingsBar: React.SFC = () => {
  const {
    lyricsVisible,
    chordsVisible,
    toggleLyrics,
    toggleChords
  } = React.useContext(SettingsContext);

  return (
    <StyledSettingsBar>
      <Button as="Link" to="/" variant="primary">
        &#9668; Back to song list
      </Button>
      <Button onClick={toggleLyrics}>
        {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
      </Button>
      <Button onClick={toggleChords}>
        {chordsVisible ? "Hide chords" : "Show chords"}
      </Button>
    </StyledSettingsBar>
  );
};

export default SettingsBar;
