import * as React from 'react';
import styled from 'styled-components';

import { IBreadcrumb } from '../types';

import Footer from './Footer';
import Header from './Header';

interface IProps {
  children?: React.ReactNode;
  title?: string;
  breadcrumbs?: IBreadcrumb[];
}

const StyledPage = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Page: React.SFC<IProps> = ({ children, title, breadcrumbs }) => {
  React.useEffect(() => {
    document.title = `Chordbook${title ? ` / ${title}` : ''}`;
  });

  return (
    <StyledPage>
      <Header breadcrumbs={breadcrumbs} />
      {children}
      <Footer />
    </StyledPage>
  );
};

export default Page;
