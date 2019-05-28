import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";
import styled from "styled-components";

import Admin from "./Admin";
import CreateSong from "./CreateSong";
import Footer from "./Footer";
import Heading from "./Heading";
import Song from "./Song";
import SongList from "./SongList";

const renderHome = () => (
  <React.Fragment>
    <Heading level={1} variant="primary">
      Chordbook
    </Heading>
    <SongList />
    <Footer />
  </React.Fragment>
);

const renderAdmin = () => (
  <React.Fragment>
    <Admin />
    <Footer />
  </React.Fragment>
);

const renderCreateSong = () => (
  <React.Fragment>
    <CreateSong />
    <Footer />
  </React.Fragment>
);

interface IRenderSongMatchParams {
  songId: string;
}

const renderSong = (props: RouteComponentProps<IRenderSongMatchParams>) => (
  <React.Fragment>
    <Song songId={props.match.params.songId} />
    <Footer />
  </React.Fragment>
);

interface IProps {
  className?: string;
}

const App: React.SFC<IProps> = ({ className }) => (
  <div className={className}>
    <Router basename={process.env.PUBLIC_PATH}>
      <Route path="/" exact={true} render={renderHome} />
      <Route path="/songs/:songId" render={renderSong} />
      <Route path="/admin" exact={true} render={renderAdmin} />
      <Route path="/admin/createSong" exact={true} render={renderCreateSong} />
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
