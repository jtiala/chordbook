import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  level?: number;
  variant?: string;
  children?: React.ReactNode;
}

const H1 = styled.h1<IProps>`
  margin: 0;
  font-size: 28px;
  font-family: 'Caveat Brush', cursive;
  text-align: center;
  color: ${(props) => (props.variant === 'primary' ? 'tomato' : 'black')};
`;

const H2 = styled.h2<IProps>`
  margin: 0;
  font-size: 20px;
  font-family: 'Caveat Brush', cursive;
  text-align: center;
  color: ${(props) => (props.variant === 'primary' ? 'tomato' : 'black')};
`;

const H3 = styled.h3<IProps>`
  margin: 0;
  font-size: 14px;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  color: ${(props) => (props.variant === 'primary' ? 'tomato' : 'black')};
`;

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
