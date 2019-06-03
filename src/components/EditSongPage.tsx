import * as React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";

import { firestore } from "../firebase";

import AuthenticatedPage from "./AuthenticatedPage";
import Heading from "./Heading";
import Message from "./Message";
import Pulse from "./Pulse";
import SongEditor from "./SongEditor";

interface IProps {
  songId?: string;
}

const EditSongPage: React.SFC<IProps> = ({ songId }) => {
  const [data, loading, error] = useDocumentData(
    firestore.doc(`songs/${songId}`)
  );

  if (data) {
    const { artist, title, sections } = data;

    return (
      <AuthenticatedPage>
        <Heading level={1} variant="primary">
          Edit Song
        </Heading>
        <SongEditor
          id={songId}
          artist={artist}
          title={title}
          sections={sections}
        />
      </AuthenticatedPage>
    );
  }

  if (loading) {
    return (
      <AuthenticatedPage>
        <Pulse />
      </AuthenticatedPage>
    );
  }

  if (error) {
    return (
      <AuthenticatedPage>
        <Message variant="error">Error: {error}</Message>
      </AuthenticatedPage>
    );
  }

  return <Redirect to="/" />;
};

export default EditSongPage;
