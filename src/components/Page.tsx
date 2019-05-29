import * as React from "react";
import styled from "styled-components";

import Footer from "./Footer";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  variant?: string;
}

const Page: React.SFC<IProps> = ({ className, children }) => (
  <section className={className}>
    {children}
    <Footer />
  </section>
);

const StyledPage = styled(Page)<IProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: ${props => (props.variant === "stretch" ? "stretch" : "center")};
`;

export default StyledPage;
