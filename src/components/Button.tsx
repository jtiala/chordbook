import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IProps {
  as?: 'a' | 'span' | 'Link';
  variant?: 'error' | 'delete' | 'success' | 'danger' | 'primary';
  children?: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'reset' | 'submit';
  value?: string | number;
  disabled?: boolean;
  tabindex?: number;
}

const StyledSpan = styled.span<IProps>`
  color: ${(props) => {
    switch (props.variant) {
      case 'error':
      case 'delete':
        return 'red';
      case 'success':
        return 'green';
      case 'danger':
        return 'orange';
      case 'primary':
        return 'tomato';
      default:
        return 'dimgray';
    }
  }};
  cursor: pointer;

  :hover,
  :active {
    color: ${(props) => {
      switch (props.variant) {
        case 'primary':
          return '#ff8d79';
        default:
          return 'black';
      }
    }};
  }
`;

const CommonStyles = css<IProps>`
  padding: 12px 14px;
  border: none;
  background-color: ${(props) => {
    switch (props.variant) {
      case 'error':
      case 'delete':
        return 'red';
      case 'success':
        return 'green';
      case 'danger':
        return 'orange';
      case 'primary':
        return 'tomato';
      default:
        return 'dimgray';
    }
  }};
  color: white;
  cursor: pointer;
  font-size: 12px;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  text-decoration: none;

  :disabled {
    opacity: 0.5;
  }

  :focus {
    outline: ${(props) => {
        switch (props.variant) {
          case 'error':
          case 'delete':
            return 'red';
          case 'success':
            return 'green';
          case 'danger':
            return 'orange';
          case 'primary':
            return 'tomato';
          default:
            return 'dimgray';
        }
      }}
      auto 3px;
  }

  :hover:not(:disabled),
  :active:not(:disabled) {
    opacity: 0.7;
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

const Button: React.SFC<IProps> = ({ as, variant, children, href, to, onClick, type, value, disabled }) => {
  switch (as) {
    case 'a':
      return (
        <StyledA variant={variant} href={href}>
          {children}
        </StyledA>
      );
    case 'span':
      return (
        <StyledSpan variant={variant} onClick={onClick} role="button" tabindex={0}>
          {children}
        </StyledSpan>
      );
    case 'Link':
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
          type={type ? type : 'button'}
          value={value}
          disabled={disabled}
        >
          {children}
        </StyledButton>
      );
  }
};

export default Button;
