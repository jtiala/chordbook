import * as React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { firestore } from "../firebase";

export interface IProps {
  className?: string;
}

const SongList: React.SFC<IProps> = ({ className }) => {
  const { error, loading, value } = useCollection(
    firestore.collection("songs")
  );

  if (loading) {
    return (
      <div className={className}>
        <p>Loading...</p>
      </div>
    );
  }

  if (value) {
    return (
      <div className={className}>
        <h1>Chordbook</h1>
        <ul>
          {value.docs.map(doc => (
            <li key={`Song-${doc.id}`}>
              <Link to={`/songs/${doc.id}`}>
                {doc.data().artist} - {doc.data().title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={className}>
      <p>Error{error && `: ${error}`}</p>
    </div>
  );
};

const StyledSongList = styled(SongList)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export default StyledSongList;
