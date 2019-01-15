import * as React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { firestore } from "../firebase";

import Error from "./Error";
import Pulse from "./Pulse";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  color: tomato;

  &:nth-child(2n) {
    background-color: whitesmoke;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 5px;
  color: black;
  text-decoration: none;

  :hover {
    color: tomato;
  }

  :active {
    color: tomato;
    background-color: #ffe2dd;
  }
`;

const SongList: React.SFC = () => {
  const { error, loading, value } = useCollection(
    firestore.collection("songs")
  );

  if (loading) {
    return <Pulse />;
  }

  if (value) {
    return (
      <List>
        {value.docs.map(doc => (
          <ListItem key={`Song-${doc.id}`}>
            <StyledLink to={`/songs/${doc.id}`}>
              {doc.data().artist} - {doc.data().title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    );
  }

  return <Error>Error{error && `: ${error}`}</Error>;
};

export default SongList;
