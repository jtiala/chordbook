import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { IBreadcrumb } from '../types';

const activeClassName = 'active';

interface IProps {
  breadcrumbs?: IBreadcrumb[];
}

const StyledHeader = styled.header`
  padding-bottom: 5px;
  border-bottom: 2px solid dimgray;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  padding: 0;
  margin: 0;
  list-style: none;

  > * {
    padding-bottom: 3px;
  }

  > :not(:last-child) {
    margin: 0 10px 0 0;

    :after {
      content: ' ';
    }
  }

  > :not(:first-child) {
    margin: 0 10px 0 0;

    :before {
      color: dimgray;
      content: '/ ';
    }
  }
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: black;
  text-decoration: none;

  :hover {
    color: tomato;
  }

  &.${activeClassName} {
    color: tomato;
  }
`;

const Header: React.SFC<IProps> = ({ breadcrumbs }) => {
  const breadcrumbLinks: React.ReactNode[] = [];

  if (breadcrumbs) {
    breadcrumbs.forEach((item) => {
      if (item.link) {
        breadcrumbLinks.push(
          <StyledNavLink to={item.link} activeClassName={activeClassName} exact={true}>
            {item.title}
          </StyledNavLink>,
        );
      } else {
        breadcrumbLinks.push(<span>{item.title}</span>);
      }
    });
  }

  const homeLink = (
    <li>
      <StyledNavLink to="/" activeClassName={activeClassName} exact={true}>
        Chordbook
      </StyledNavLink>
    </li>
  );

  const links = [homeLink, ...breadcrumbLinks];

  return (
    <StyledHeader>
      <LinkList>{links}</LinkList>
    </StyledHeader>
  );
};

export default Header;
