import * as React from 'react';

import AuthenticatedComponent from './AuthenticatedComponent';
import Button from './Button';
import Page from './Page';
import SongList from './SongList';

const HomePage: React.SFC = () => (
  <Page title="Home">
    <SongList />
    <AuthenticatedComponent>
      <Button as="Link" variant="primary" to="/songs/new">
        Add a song
      </Button>
    </AuthenticatedComponent>
  </Page>
);

export default HomePage;
