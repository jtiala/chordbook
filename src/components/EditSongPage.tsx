import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";

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
  const [value, fetching, error] = useDocument(
    firestore.doc(`songs/${songId}`)
  );

  if (value) {
    const { artist, title, sections } = value.data();
    return (
      <AuthenticatedPage variant="stretch">
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

  if (fetching) {
    return (
      <AuthenticatedPage>
        <Pulse />
      </AuthenticatedPage>
    );
  }

  return (
    <AuthenticatedPage>
      <Message variant="error">
        {`Error: ${error ? error : "Unknown error while fetching data"}`}
      </Message>
    </AuthenticatedPage>
  );
};

export default EditSongPage;
