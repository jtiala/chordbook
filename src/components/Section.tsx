import * as React from 'react';
import styled from 'styled-components';

import SettingsContext from '../contexts/Settings';
import { ISection } from '../types';

import Chords from './Chords';
import Heading from './Heading';
import Lyrics from './Lyrics';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: whitesmoke;
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Section: React.SFC<ISection> = ({ name, chords, lyrics }) => {
  const { lyricsVisible, chordsVisible } = React.useContext(SettingsContext);

  return (
    <StyledSection>
      {name && <Heading level={3}>{name}</Heading>}
      {chordsVisible && chords && <Chords {...chords} />}
      {lyricsVisible && lyrics && <Lyrics {...lyrics} />}
    </StyledSection>
  );
};

export default Section;
