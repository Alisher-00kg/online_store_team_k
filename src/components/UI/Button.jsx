import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, onClick, disabled, variant, type, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const variantStyles = {
  addToBasket: css`
    width: 344px;
    height: 50px;
    padding: 10px;
    color: #fafafa;
    background: #121314;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0%;
    border: none;
    &:hover {
      background: #333536;
    }
    &:active {
      background: #262b2d;
    }
  `,
  categories: css`
    width: 95px;
    height: 30px;
    border: 0.2px solid #000000;
    background: white;
    padding: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #000000;

    &:hover {
      background: #30723fcc;
      color: #ffffff;
    }
  `,
  dimensions: css`
    width: 60px;
    height: 20px;
    border: 0.2px solid #000000;
    background: white;
    padding: 10px;
    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #000000;
    &:hover {
      background: #30723fcc;
      color: #ffffff;
    }
  `,
  results: css`
    width: 190px;
    height: 30px;
    border: 1px solid #30723f;
    background: white;
    padding: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #000000;
    &:hover {
      background: #30723fcc;
      color: #ffffff;
    }
  `,
  login: css`
    width: 408px;
    height: 50px;
    padding: 10px;
    color: #fafafa;
    background: #121314;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0%;
    border: none;
    &:hover {
      background: #333536;
    }
    &:active {
      background: #262b2d;
    }
  `,
  add: css`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    background: #121314;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    border: none;
    &:hover {
      background: #333536;
    }
    &:active {
      background: #262b2d;
    }
  `,
  save: css`
    width: 140px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    background: #121314;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    border: none;
    &:hover {
      background: #333536;
    }
    &:active {
      background: #262b2d;
    }
  `,
  cancel: css`
    width: 140px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    background: #7e8494;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    border: none;
    &:hover {
      background: #7e828b;
    }
    &:active {
      background: #6e797d;
    }
  `,
  delete: css`
    width: 140px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    background: #30723f;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    border: none;
    &:hover {
      background: #265d33;
    }
    &:active {
      background: #348948;
    }
  `,
  textVariant: css`
    justify-content: space-between;
    width: 270px;
    height: 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0%;
    text-decoration: underline solid 1px;
    color: #30723f;
    border: none;
    padding: 10px;
    background: #ffffff;
  `,
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  gap: 10px;
  cursor: pointer;
  ${({ variant }) => variantStyles[variant] || ""}
`;
