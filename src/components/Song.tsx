import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components";

import { firestore } from "../firebase";

import Heading from "./Heading";
import Message from "./Message";
import Pulse from "./Pulse";
import Section from "./Section";
import SettingsBar from "./SettingsBar";

const Separator = styled.span`
  color: black;
`;

interface IProps {
  songId: string;
}

const Song: React.SFC<IProps> = ({ songId }) => {
  const [value, loading, error] = useDocument(firestore.doc(`songs/${songId}`));

  if (loading) {
    return <Pulse />;
  }

  if (value) {
    const { artist, title, sections } = value.data();

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  return <Message variant="error">Error{error && `: ${error}`}</Message>;
};

export default Song;
