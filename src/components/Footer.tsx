import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 20px 0 0 0;
  padding: 3px 0 0 0;
  list-style: none;
  justify-content: right;
  border-top: 1px solid whitesmoke;
`;

const ListItem = styled.li`
  margin: 0 10px 0 0;
`;

const A = styled.a`
  color: black;
  text-decoration: none;

  :hover {
    color: tomato;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    color: tomato;
  }
`;

const Footer: React.SFC = () => {
  return (
    <footer>
      <List>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/admin">Admin</StyledLink>
        </ListItem>
        <ListItem>
          <A href="https://github.com/jtiala/chordbook" target="_blank">
            GitHub
          </A>
        </ListItem>
      </List>
    </footer>
  );
};

export default Footer;
