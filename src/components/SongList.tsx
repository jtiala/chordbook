import * as React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { firestore } from '../firebase';

import Message from './Message';
import Pulse from './Pulse';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  color: tomato;

  &:nth-child(2n) {
    background-color: whitesmoke;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  z-index: 5;
  display: block;
  padding: 10px 5px;
  color: black;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;

  :hover {
    color: tomato;
  }

  :active {
    background-color: #ffe2dd;
    color: tomato;
  }

  :focus {
    z-index: 10;
    outline: tomato solid 3px;
  }
`;

const SongList: React.SFC = () => {
  const [value, loading, error] = useCollection(firestore.collection('songs'));

  if (loading) {
    return <Pulse />;
  }

  if (value) {
    return (
      <List>
        {value.docs.map((doc) => (
          <ListItem key={`Song-${doc.id}`}>
            <StyledLink to={`/songs/${doc.id}`}>
              {doc.data().artist} - {doc.data().title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    );
  }

  return <Message variant="error">Error{error && `: ${error}`}</Message>;
};

export default SongList;
