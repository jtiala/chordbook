import * as React from "react";
import styled from "styled-components";

interface IStyledProps {
  variant?: string;
}

const H1 = styled.h1<IStyledProps>`
  margin: 10px auto 28px auto;
  font-size: 28px;
  font-family: "Caveat Brush", cursive;
  text-align: center;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
`;

const H2 = styled.h2<IStyledProps>`
  margin: 10px auto 20px auto;
  font-size: 20px;
  font-family: "Caveat Brush", cursive;
  text-align: center;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
`;

const H3 = styled.h3<IStyledProps>`
  margin: 0 0 10px 0;
  font-size: 14px;
  font-family: "Ubuntu Mono", monospace;
  text-transform: uppercase;
  text-align: left;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
`;

interface IProps {
  level?: number;
  variant?: string;
  children?: React.ReactNode;
}

const Heading: React.SFC<IProps> = ({ level, variant, children }) => {
  switch (level) {
    case 3:
      return <H3 variant={variant}>{children}</H3>;
    case 2:
      return <H2 variant={variant}>{children}</H2>;
    default:
      return <H1 variant={variant}>{children}</H1>;
  }
};

export default Heading;