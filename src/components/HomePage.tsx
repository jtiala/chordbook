import * as React from "react";

import Heading from "./Heading";
import Page from "./Page";
import SongList from "./SongList";

const HomePage: React.SFC = () => (
  <Page title="Home">
    <SongList />
  </Page>
);

export default HomePage;
