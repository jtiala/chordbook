import * as React from "react";
import styled from "styled-components";

import Song from "./Song";

export interface IProps {
  className?: string;
}

const ChordBar: React.SFC<IProps> = ({ className }) => (
  <div className={className}>
    <Song songRef="songs/nickelback-how-you-remind-me" />
  </div>
);

const StyledChordBar = styled(ChordBar)`
  margin-top: 5px;
  font-family: monospace;
`;

export default StyledChordBar;
