import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthenticatedComponent from './AuthenticatedComponent';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  border-top: 1px solid whitesmoke;
  margin: 20px 0 0 0;

  > * {
    max-width: 50%;
  }

  > :last-child {
    text-align: right;
  }
`;

const A = styled.a`
  color: dimgray;
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
  const LoginLogoutLink = (
    <AuthenticatedComponent fallback={<StyledLink to="/login">Login</StyledLink>}>
      <StyledLink to="/logout">Logout</StyledLink>
    </AuthenticatedComponent>
  );

  const CreatorLink = (
    <A href="https://jtia.la" target="_blank">
      jtiala
    </A>
  );

  const RepositoryLink = (
    <A href="https://github.com/jtiala/chordbook" target="_blank">
      GitHub
    </A>
  );

  return (
    <StyledFooter>
      <span>{LoginLogoutLink}</span>
      <span>
        {'OSS by '}
        {CreatorLink}
        {', available at '}
        {RepositoryLink}
        {'.'}
      </span>
    </StyledFooter>
  );
};

export default Footer;
