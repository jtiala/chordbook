import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";
import styled from "styled-components";

import Song from "./Song";
import SongList from "./SongList";

const Title = styled.h1`
  margin: 0 0 20px 0;
  font-size: 28px;
  font-family: "Caveat Brush", cursive;
  color: tomato;
`;

const renderHome = () => (
  <React.Fragment>
    <Title>Chordbook</Title>
    <SongList />
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
  <div className={className}>
    <Router basename={process.env.PUBLIC_PATH}>
      <Route path="/" exact={true} render={renderHome} />
      <Route path="/songs/:songId" render={renderSong} />
    </Router>
  </div>
);

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px auto;
  width: 90%;
  max-width: 640px;
  font-family: "Ubuntu Mono", monospace;
`;

export default StyledApp;
