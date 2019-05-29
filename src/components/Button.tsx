import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IStyledProps {
  variant?: string;
}

const CommonStyles = css<IStyledProps>`
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

interface IProps {
  as?: string;
  variant?: string;
  children?: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

const Button: React.SFC<IProps> = ({
  as,
  variant,
  children,
  href,
  to,
  onClick,
  type
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
        >
          {children}
        </StyledButton>
      );
  }
};

export default Button;
