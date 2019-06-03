import * as React from "react";

import { firestore } from "../firebase";
import { IBreadcrumb, ISection } from "../types";

import AuthenticatedPage from "./AuthenticatedPage";
import Heading from "./Heading";
import Message from "./Message";
import Pulse from "./Pulse";
import SongEditor from "./SongEditor";

const NewSongPage: React.SFC = () => {
  const sections: ISection[] = [
    {
      name: "Verse 1",
      chords: {
        lines: [
          {
            repeat: 1,
            bars: { "1": ["A", "Bm"], "2": ["C#", "Dsus4"] }
          }
        ]
      },
      lyrics: { lines: [] }
    }
  ];

  const title = "New Song";
  const breadcrumbs: IBreadcrumb[] = [{ title, link: `/songs/new` }];

  return (
    <AuthenticatedPage title={title} breadcrumbs={breadcrumbs}>
      <SongEditor artist={""} title={""} sections={sections} />
    </AuthenticatedPage>
  );
};

export default NewSongPage;
