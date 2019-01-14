import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";
import styled from "styled-components";

import Song from "./Song";
import SongList from "./SongList";

const renderHome = (props: RouteComponentProps) => (
  <React.Fragment>
    <h1>Chordbook</h1>
    <SongList {...props} />
  </React.Fragment>
);

interface IRenderSongMatchParams {
  songId: string;
}

const renderSong = (props: RouteComponentProps<IRenderSongMatchParams>) => (
  <Song songId={props.match.params.songId} />
);

interface IProps {
  className?: string;
}

const App: React.SFC<IProps> = ({ className }) => (
  <Router basename={process.env.PUBLIC_PATH}>
    <div className={className}>
      <Route path="/" exact={true} render={renderHome} />
      <Route path="/songs/:songId" render={renderSong} />
    </div>
  </Router>
);

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5px;
  font-family: monospace;
`;

export default StyledApp;
