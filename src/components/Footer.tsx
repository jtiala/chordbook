import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 20px 0 0 0;
  border-top: 1px solid whitesmoke;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 3px 0 0 0;
  list-style: none;
  justify-content: right;
  > :not(:last-child) {
    margin: 0 10px 0 0;
  }
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
    <StyledFooter>
      <LinkList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/admin">Admin</StyledLink>
        </li>
        <li>
          <A href="https://github.com/jtiala/chordbook" target="_blank">
            GitHub
          </A>
        </li>
      </LinkList>
    </StyledFooter>
  );
};

export default Footer;
