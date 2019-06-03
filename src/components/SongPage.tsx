import * as React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import SettingsContext from "../contexts/Settings";
import { firestore } from "../firebase";
import { IBreadcrumb } from "../types";

import ActionsBar from "./ActionsBar";
import AuthenticatedComponent from "./AuthenticatedComponent";
import Button from "./Button";
import Heading from "./Heading";
import Message from "./Message";
import Page from "./Page";
import Pulse from "./Pulse";
import Section from "./Section";

interface IProps {
  songId: string;
}

const Separator = styled.span`
  color: black;
`;

const SongPage: React.SFC<IProps> = ({ songId }) => {
  const [data, loading, error] = useDocumentData(
    firestore.doc(`songs/${songId}`)
  );

  const {
    lyricsVisible,
    chordsVisible,
    toggleLyrics,
    toggleChords
  } = React.useContext(SettingsContext);

  if (loading) {
    return (
      <Page title="Loading">
        <Pulse />
      </Page>
    );
  }

  if (data) {
    const { artist, title, sections } = data;
    const songName = `${artist} - ${title}`;
    const breadcrumbs: IBreadcrumb[] = [
      { title: songName, link: `/songs/${songId}` }
    ];

    return (
      <Page title={songName} breadcrumbs={breadcrumbs}>
        <ActionsBar>
          <Button onClick={toggleLyrics}>
            {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
          </Button>
          <Button onClick={toggleChords}>
            {chordsVisible ? "Hide chords" : "Show chords"}
          </Button>
          <AuthenticatedComponent>
            <Button as="Link" to={`/songs/${songId}/edit`}>
              Edit
            </Button>
          </AuthenticatedComponent>
        </ActionsBar>

        {sections &&
          sections.map((section: any, i: number) => (
            <Section key={`Section-${i}`} {...section} />
          ))}
      </Page>
    );
  }

  if (error) {
    return (
      <Page title="Error">
        <Message variant="error">Error: {error}</Message>
      </Page>
    );
  }

  return <Redirect to="/" />;
};

export default SongPage;
