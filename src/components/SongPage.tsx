import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components";

import { firestore } from "../firebase";

import Heading from "./Heading";
import Message from "./Message";
import Page from "./Page";
import Pulse from "./Pulse";
import Section from "./Section";
import SettingsBar from "./SettingsBar";

const Separator = styled.span`
  color: black;
`;

interface IProps {
  songId: string;
}

const SongPage: React.SFC<IProps> = ({ songId }) => {
  const [value, loading, error] = useDocument(firestore.doc(`songs/${songId}`));

  if (loading) {
    return (
      <Page>
        <Pulse />
      </Page>
    );
  }

  if (value) {
    const { artist, title, sections } = value.data();

    return (
      <Page variant="stretch">
        <Heading level={1} variant="primary">
          {artist && artist}
          <Separator> - </Separator>
          {title && title}
        </Heading>

        <SettingsBar />

        {sections &&
          sections.map((section: any, i: number) => (
            <Section key={`Section-${i}`} {...section} />
          ))}
      </Page>
    );
  }

  return (
    <Page>
      <Message variant="error">Error{error && `: ${error}`}</Message>
    </Page>
  );
};

export default SongPage;
