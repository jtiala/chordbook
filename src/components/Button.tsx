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
  disabled?: boolean;
}

const CommonStyles = css<IProps>`
  background-color: ${props => {
    switch (props.variant) {
      case "error":
      case "delete":
        return "red";
      case "success":
        return "green";
      case "danger":
        return "orange";
      case "primary":
        return "tomato";
      default:
        return "dimgray";
    }
  }};
  padding: 12px 14px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  :focus {
    outline: ${props => {
        switch (props.variant) {
          case "error":
          case "delete":
            return "red";
          case "success":
            return "green";
          case "danger":
            return "orange";
          case "primary":
            return "tomato";
          default:
            return "dimgray";
        }
      }}
      auto 3px;
  }

  :hover:not(:disabled),
  :active:not(:disabled) {
    background-color: #ff8d79;
  }

  :hover:focus,
  :active:focus {
    outline-color: #ff8d79;
  }

  :disabled {
    opacity: 0.5;
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
  value,
  disabled
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
          disabled={disabled}
        >
          {children}
        </StyledButton>
      );
  }
};

export default Button;
