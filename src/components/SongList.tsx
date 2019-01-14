import * as React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { firestore } from "../firebase";

interface IProps {
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
      <ul className={className}>
        {value.docs.map(doc => (
          <li key={`Song-${doc.id}`}>
            <Link to={`/songs/${doc.id}`}>
              {doc.data().artist} - {doc.data().title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={className}>
      <p>Error{error && `: ${error}`}</p>
    </div>
  );
};

const StyledSongList = styled(SongList)``;

export default StyledSongList;
