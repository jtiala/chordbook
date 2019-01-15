import * as React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styled from "styled-components";

import { firestore } from "../firebase";

import Error from "./Error";
import Pulse from "./Pulse";
import Section from "./Section";
import SettingsBar from "./SettingsBar";

const Title = styled.h2`
  font-size: 28px;
  font-family: "Caveat Brush", cursive;
  text-align: center;
  color: tomato;
`;

const Separator = styled.span`
  color: black;
`;

interface IProps {
  songId: string;
}

const Song: React.SFC<IProps> = ({ songId }) => {
  const { error, loading, value } = useDocument(
    firestore.doc(`songs/${songId}`)
  );

  if (loading) {
    return <Pulse />;
  }

  if (value) {
    const { artist, title, sections } = value.data();

    return (
      <React.Fragment>
        <Title>
          {artist && artist}
          <Separator> - </Separator>
          {title && title}
        </Title>

        <SettingsBar />

        {sections &&
          sections.map((section: any, i: number) => (
            <Section key={`Section-${i}`} {...section} />
          ))}
      </React.Fragment>
    );
  }

  return <Error>Error{error && `: ${error}`}</Error>;
};

export default Song;
