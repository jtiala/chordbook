import * as React from "react";
import styled from "styled-components";

import Footer from "./Footer";

interface IProps {
  children?: React.ReactNode;
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

const Page: React.SFC<IProps> = ({ children }) => (
  <StyledPage>
    {children}
    <Footer />
  </StyledPage>
);

export default Page;
