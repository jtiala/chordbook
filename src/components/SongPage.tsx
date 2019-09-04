import * as React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";

import SettingsContext from "../contexts/Settings";
import { firestore } from "../firebase";
import { IBreadcrumb, ISection } from "../types";
import { slugFromArtistAndTitle } from "../utils";

import ActionsBar from "./ActionsBar";
import AuthenticatedComponent from "./AuthenticatedComponent";
import Button from "./Button";
import Message from "./Message";
import Page from "./Page";
import Pulse from "./Pulse";
import Section from "./Section";

interface IProps {
  id: string;
}

const SongPage: React.SFC<IProps> = ({ id }) => {
  const [data, loading, error] = useDocumentData(firestore.doc(`songs/${id}`));

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
    const slug = slugFromArtistAndTitle(artist, title);
    const name = `${artist} - ${title}`;
    const breadcrumbs: IBreadcrumb[] = [
      { title: name, link: `/songs/${id}/${slug}` }
    ];

    return (
      <Page title={name} breadcrumbs={breadcrumbs}>
        <ActionsBar>
          <Button onClick={toggleLyrics}>
            {lyricsVisible ? "Hide lyrics" : "Show lyrics"}
          </Button>
          <Button onClick={toggleChords}>
            {chordsVisible ? "Hide chords" : "Show chords"}
          </Button>
          <AuthenticatedComponent>
            <Button as="Link" to={`/songs/${id}/${slug}/edit`}>
              Edit
            </Button>
          </AuthenticatedComponent>
        </ActionsBar>

        {sections &&
          sections.map((section: ISection, i: number) => (
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
