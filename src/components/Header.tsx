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

  :focus {
    outline: black dashed 2px;
    outline-offset: 2px;
  }

  :hover {
    color: tomato;

    :focus {
      outline-color: tomato;
    }
  }

  &.${activeClassName} {
    color: tomato;

    :focus {
      outline-color: tomato;
    }
  }
`;

const Header: React.SFC<IProps> = ({ breadcrumbs }) => {
  const breadcrumbLinks: React.ReactNode[] = [];

  if (breadcrumbs) {
    breadcrumbs.forEach((item, i) => {
      if (item.link) {
        breadcrumbLinks.push(
          <li key={`breadcrumb-${i}`}>
            <StyledNavLink to={item.link} activeClassName={activeClassName} exact={true}>
              {item.title}
            </StyledNavLink>
          </li>,
        );
      } else {
        breadcrumbLinks.push(<span>{item.title}</span>);
      }
    });
  }

  const homeLink = (
    <li key={'breadcrumb-home'}>
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
