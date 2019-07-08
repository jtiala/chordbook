import * as React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { Redirect } from 'react-router-dom';

import { firestore } from '../firebase';
import { IBreadcrumb } from '../types';
import { slugFromArtistAndTitle } from '../utils';

import AuthenticatedPage from './AuthenticatedPage';
import Message from './Message';
import Pulse from './Pulse';
import SongEditor from './SongEditor';

interface IProps {
  id?: string;
}

const EditSongPage: React.SFC<IProps> = ({ id }) => {
  const [data, loading, error] = useDocumentData(firestore.doc(`songs/${id}`));

  if (data) {
    const { artist, title, sections } = data;
    const slug = slugFromArtistAndTitle(artist, title);
    const name = `${artist} - ${title}`;
    const link = `/songs/${id}/${slug}`;
    const editLink = `${link}/edit`;
    const breadcrumbs: IBreadcrumb[] = [{ title: name, link }, { title: 'Edit', link: editLink }];

    return (
      <AuthenticatedPage title={`${name} / Edit`} breadcrumbs={breadcrumbs}>
        <SongEditor id={id} artist={artist} title={title} sections={sections} />
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
