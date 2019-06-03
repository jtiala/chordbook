import * as React from "react";

import Heading from "./Heading";
import Page from "./Page";
import SongList from "./SongList";

const HomePage: React.SFC = () => (
  <Page>
    <Heading level={1} variant="primary">
      Chordbook
    </Heading>
    <SongList />
  </Page>
);

export default HomePage;
