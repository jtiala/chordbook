import * as React from "react";
import styled from "styled-components";

interface IProps {
  level?: number;
  variant?: "primary";
  children?: React.ReactNode;
}

const H1 = styled.h1<IProps>`
  margin: 0;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
  font-family: "Caveat Brush", cursive;
  font-size: 28px;
  text-align: center;
`;

const H2 = styled.h2<IProps>`
  margin: 0;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
  font-family: "Caveat Brush", cursive;
  font-size: 20px;
  text-align: center;
`;

const H3 = styled.h3<IProps>`
  margin: 0;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
  font-family: "Ubuntu Mono", monospace;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
`;

const H4 = styled.h3<IProps>`
  margin: 0;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
  font-family: "Ubuntu Mono", monospace;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
`;

const H5 = styled.h3<IProps>`
  margin: 0;
  color: ${props => (props.variant === "primary" ? "tomato" : "black")};
  font-family: "Ubuntu Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
`;

const Heading: React.SFC<IProps> = ({ level, variant, children }) => {
  switch (level) {
    case 5:
      return <H5 variant={variant}>{children}</H5>;
    case 4:
      return <H4 variant={variant}>{children}</H4>;
    case 3:
      return <H3 variant={variant}>{children}</H3>;
    case 2:
      return <H2 variant={variant}>{children}</H2>;
    default:
      return <H1 variant={variant}>{children}</H1>;
  }
};

export default Heading;
