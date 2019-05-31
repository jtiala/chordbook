import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";
import styled from "styled-components";

import AdminPage from "./AdminPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import NewSongPage from "./NewSongPage";
import SongPage from "./SongPage";

const StyledApp = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 10px auto;
  font-family: "Ubuntu Mono", monospace;
`;

interface IRenderSongIdMatchParams {
  songId: string;
}

const renderSongPage = (
  props: RouteComponentProps<IRenderSongIdMatchParams>
) => <SongPage songId={props.match.params.songId} />;

const App: React.SFC = () => (
  <StyledApp>
    <Router basename={process.env.PUBLIC_PATH}>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/admin" exact={true} component={AdminPage} />
      <Route path="/songs/:songId" render={renderSongPage} />
      <Route path="/admin/createSong" exact={true} component={NewSongPage} />
    </Router>
  </StyledApp>
);

export default App;
