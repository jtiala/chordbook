import * as React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Redirect } from "react-router-dom";

import { firestore } from "../firebase";
import { IBreadcrumb } from "../types";

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
    const songName = `${artist} - ${title}`;
    const songLink = `/songs/${songId}`;
    const editLink = `${songLink}/edit`;
    const breadcrumbs: IBreadcrumb[] = [
      { title: songName, link: songLink },
      { title: "Edit", link: editLink }
    ];

    return (
      <AuthenticatedPage title={`${songName} / Edit`} breadcrumbs={breadcrumbs}>
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
      <AuthenticatedPage title="Loading">
        <Pulse />
      </AuthenticatedPage>
    );
  }

  if (error) {
    return (
      <AuthenticatedPage title="Error">
        <Message variant="error">Error: {error}</Message>
      </AuthenticatedPage>
    );
  }

  return <Redirect to="/" />;
};

export default EditSongPage;
