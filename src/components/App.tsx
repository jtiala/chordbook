import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Song from "./Song";
import SongList from "./SongList";

export interface IProps {
  className?: string;
}

const App: React.SFC<IProps> = ({ className }) => (
  <Router basename={process.env.PUBLIC_PATH}>
    <div className={className}>
      <Route path="/" exact={true} component={SongList} />
      <Route path="/songs/:songId" component={Song} />
    </div>
  </Router>
);

const StyledApp = styled(App)`
  margin-top: 5px;
  font-family: monospace;
`;

export default StyledApp;
