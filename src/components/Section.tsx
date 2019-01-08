import * as React from "react";
import styled from "styled-components";

export interface IProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const Section: React.SFC<IProps> = ({ className, children, title }) => (
  <div className={className}>
    <h3>{title}</h3>
    {children}
  </div>
);

const StyledSection = styled(Section)`
  background: lightgray;
  margin-bottom: 10px;
  padding: 10px;
`;

export default StyledSection;
