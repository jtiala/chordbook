import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SettingsContext from "../contexts/Settings";

import Button from "./Button";

interface IProps {
  className?: string;
}

const SettingsBar: React.SFC<IProps> = ({ className }) => {
  const {
    lyricsVisible,
    chordsVisible,
    toggleLyrics,
    toggleChords
  } = React.useContext(SettingsContext);

  return (
    <div className={className}>
      <Button as="Link" to="/" variant="primary">
        &#9668; Back to song list
      </Button>
      <Button onClick={toggleLyrics}>
        {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
      </Button>
      <Button onClick={toggleChords}>
        {chordsVisible ? "Hide chords" : "Show chords"}
      </Button>
    </div>
  );
};

const StyledSettingsBar = styled(SettingsBar)`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  margin: 10px 0;
  background: whitesmoke;
`;

export default StyledSettingsBar;
