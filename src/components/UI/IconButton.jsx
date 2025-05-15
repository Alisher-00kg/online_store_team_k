import React from "react";
import styled, { css } from "styled-components";

const IconButton = ({
  icon: Icon,
  children,
  onClick,
  style,
  variant,
  ...rest
}) => {
  return (
    <StyledButton onClick={onClick} style={style} variant={variant} {...rest}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

export default IconButton;

const variantStyles = {
  buttonIcons: css`
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: none;
    border-radius: 4px;
    &:hover {
      background: #e9e6e6;
    }
    &:active {
      background: #d4d1d1;
    }
  `,
  buttonArrowicons: css`
    width: 31px;
    height: 32px;
    background: #f6f8fb;
    border-radius: 8px;
    border: none;
    &:hover {
      background: #e9e6e6;
    }
    &:active {
      background: #d4d1d1;
    }
  `,
  buttonChapter: css`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    font-weight: 600;
    width: 218px;
    height: 48px;
    border: none;
    background: #ffffff;
    color: #7e8494;
    &:hover {
      color: #5a8e65;
      background: #a0c8a9;
    }
  `,
  buttonClose: css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2efef;
    border-radius: 50%;
    border: none;
    &:hover {
      background: #e6e3e3;
    }
    &:active {
      background: #dfdada;
    }
  `,
  plusMinus: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: #fafafa;
    border: none;
    &:hover {
      background: #e6e3e3;
    }
    &:active {
      background: #dfdada;
    }
  `,
  
};

const StyledButton = styled.button`
  cursor: pointer;
  transition: 0.1s;
  ${({ variant }) => variantStyles[variant] || ""}
`;
