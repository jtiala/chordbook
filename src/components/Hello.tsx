import * as React from "react";
import styled from "styled-components";

export interface IProps {
  compiler: string;
  framework: string;
  className?: string;
}

const Hello = (props: IProps) => (
  <h1 className={props.className}>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

const StyledHello = styled(Hello)`
  color: tomato;
`;

export default StyledHello;
