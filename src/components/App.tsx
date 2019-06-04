import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import styled from "styled-components";

import AdminPage from "./AdminPage";
import EditSongPage from "./EditSongPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
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

const renderEditSongPage = (
  props: RouteComponentProps<IRenderSongIdMatchParams>
) => <EditSongPage songId={props.match.params.songId} />;

const App: React.SFC = () => (
  <StyledApp>
    <Router basename={process.env.PUBLIC_PATH}>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/logout" exact={true} component={LogoutPage} />
        <Route path="/admin" exact={true} component={AdminPage} />
        <Route path="/songs/new" exact={true} component={NewSongPage} />
        <Route path="/songs/:songId" exact={true} render={renderSongPage} />
        <Route
          path="/songs/:songId/edit"
          exact={true}
          render={renderEditSongPage}
        />
      </Switch>
    </Router>
  </StyledApp>
);

export default App;
