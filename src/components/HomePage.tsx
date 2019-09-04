import * as React from "react";
import styled from "styled-components";

import AuthenticatedComponent from "./AuthenticatedComponent";
import Button from "./Button";
import Page from "./Page";
import SongList from "./SongList";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const HomePage: React.SFC = () => (
  <Page title="Home">
    <SongList />
    <AuthenticatedComponent>
      <ButtonContainer>
        <Button as="Link" to="/songs/new">
          + Add a song
        </Button>
      </ButtonContainer>
    </AuthenticatedComponent>
  </Page>
);

export default HomePage;
