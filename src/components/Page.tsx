import * as React from "react";
import styled from "styled-components";

import Footer from "./Footer";

interface IProps {
  children?: React.ReactNode;
  variant?: string;
}

const StyledPage = styled.section<IProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: ${props => (props.variant === "stretch" ? "stretch" : "center")};

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Page: React.SFC<IProps> = ({ children, variant }) => (
  <StyledPage variant={variant}>
    {children}
    <Footer />
  </StyledPage>
);

export default Page;
