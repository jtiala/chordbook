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
  margin: 10px auto 20px auto;
  font-size: 28px;
  font-family: "Caveat Brush", cursive;
  text-align: center;
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
  align-items: stretch;
  width: 90%;
  max-width: 768px;
  margin: 10px auto;
  font-family: "Ubuntu Mono", monospace;
`;

export default StyledApp;
