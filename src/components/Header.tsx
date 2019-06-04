import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { IBreadcrumb } from "../types";

const activeClassName = "active";

interface IProps {
  title?: string;
  breadcrumbs?: IBreadcrumb[];
}

const StyledHeader = styled.header`
  border-bottom: 2px solid dimgray;
  padding-bottom: 5px;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: left;

  > * {
    padding-bottom: 3px;
  }

  > :not(:last-child) {
    margin: 0 10px 0 0;

    :after {
      content: " ";
    }
  }

  > :not(:first-child) {
    margin: 0 10px 0 0;

    :before {
      content: "/ ";
      color: dimgray;
    }
  }
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
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

const Header: React.SFC<IProps> = ({ title, breadcrumbs }) => {
  const breadcrumbLinks: React.ReactNode[] = [];

  if (breadcrumbs) {
    breadcrumbs.forEach(item => {
      if (item.link) {
        breadcrumbLinks.push(
          <StyledNavLink
            to={item.link}
            activeClassName={activeClassName}
            exact={true}
          >
            {item.title}
          </StyledNavLink>
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
