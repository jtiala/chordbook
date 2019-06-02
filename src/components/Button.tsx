import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IProps {
  as?: string;
  variant?: string;
  children?: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "reset" | "submit";
  value?: string | number;
}

const CommonStyles = css<IProps>`
  flex-grow: 1;
  margin: 10px;
  padding: 10px;
  background-color: ${props =>
    props.variant === "primary" ? "tomato" : "dimgray"};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  :focus {
    outline: ${props => (props.variant === "primary" ? "tomato" : "dimgray")}
      auto 5px;
  }

  :hover,
  :active {
    background-color: #ff8d79;
  }

  :hover:focus,
  :active:focus {
    outline-color: #ff8d79;
  }
`;

const StyledA = styled.a`
  ${CommonStyles}
`;

const StyledLink = styled(Link)`
  ${CommonStyles}
`;

const StyledButton = styled.button`
  ${CommonStyles}
`;

const Button: React.SFC<IProps> = ({
  as,
  variant,
  children,
  href,
  to,
  onClick,
  type,
  value
}) => {
  switch (as) {
    case "a":
      return (
        <StyledA variant={variant} href={href}>
          {children}
        </StyledA>
      );
    case "Link":
      return (
        <StyledLink variant={variant} to={to}>
          {children}
        </StyledLink>
      );
    default:
      return (
        <StyledButton
          variant={variant}
          onClick={onClick}
          type={type ? type : "button"}
          value={value}
        >
          {children}
        </StyledButton>
      );
  }
};

export default Button;
