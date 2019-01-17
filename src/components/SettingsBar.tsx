import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import SettingsContext from "../contexts/Settings";

const LinkStyle = css`
  flex-grow: 1;
  margin: 10px 0 10px 10px;
  padding: 10px;
  background-color: tomato;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  :last-child {
    margin: 10px;
  }

  :hover,
  :active {
    background-color: #ff8d79;
  }

  :focus {
    outline: tomato auto 5px;
  }
`;

const Button = styled.button`
  ${LinkStyle}
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
`;

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
      <StyledLink to="/">&#9668; Back to song list</StyledLink>
      <Button onClick={toggleLyrics} type="button">
        {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
      </Button>
      <Button onClick={toggleChords} type="button">
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
