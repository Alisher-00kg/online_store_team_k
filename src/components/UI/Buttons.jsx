import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const Buttons = ({
  children,
  onClick,
  disabled,
  buttonVariant,
  type = "button",
  ...props
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      type={type}
      buttonVariant={buttonVariant}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default Buttons;

const variantStyles = {
  addToBasket: {
    width: "344px",
    height: "50px",
    padding: "10px",
    color: "#fafafa",
    borderRadius: "0.0px",
    lineHeight: "20px",
    letterSpacing: "0%",
    backgroundColor: "#121314",
    fontSize: "18px",
    fontWeight: "400",
    "&:hover": {
      backgroundColor: "#333536",
    },
    "&:active": {
      backgroundColor: "#262b2d",
    },
  },
  categories: {
    width: "95px",
    height: "30px",
    border: "0.1px solid #000",
    borderRadius: "0.0px",
    backgroundColor: "white",
    fontSize: "11px",
    color: "#000",
    "&:hover": {
      backgroundColor: "#30723fcc",
      color: "#fff",
    },
  },
  dimensions: {
    width: "60px",
    height: "20px",
    border: "0.2px solid #000",
    borderRadius: "0.0px",
    backgroundColor: "white",
    fontSize: "9px",
    color: "#000",
    "&:hover": {
      backgroundColor: "#30723fcc",
      color: "#fff",
    },
  },
  results: {
    width: "190px",
    height: "30px",
    border: "1px solid #30723f",
    backgroundColor: "white",
    borderRadius: "0.0px",
    fontSize: "10px",
    color: "#000",
    "&:hover": {
      backgroundColor: "#30723fcc",
      color: "#fff",
    },
  },
  login: {
    width: "408px",
    height: "50px",
    padding: "10px",
    color: "#fafafa",
    borderRadius: "0.0px",
    backgroundColor: "#121314",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#333536",
    },
    "&:active": {
      backgroundColor: "#262b2d",
    },
  },
  add: {
    width: "120px",
    height: "40px",
    borderRadius: "10px",
    color: "#fff",
    backgroundColor: "#121314",
    fontSize: "13px",
    "&:hover": {
      backgroundColor: "#333536",
    },
    "&:active": {
      backgroundColor: "#262b2d",
    },
  },
  save: {
    width: "140px",
    height: "40px",
    borderRadius: "10px",
    color: "#fff",
    backgroundColor: "#121314",
    fontSize: "13px",
    "&:hover": {
      backgroundColor: "#333536",
    },
    "&:active": {
      backgroundColor: "#262b2d",
    },
  },
  cancel: {
    width: "140px",
    height: "40px",
    borderRadius: "10px",
    color: "#fff",
    backgroundColor: "#7e8494",
    fontSize: "13px",
    "&:hover": {
      backgroundColor: "#7e828b",
    },
    "&:active": {
      backgroundColor: "#6e797d",
    },
  },
  delete: {
    width: "140px",
    height: "40px",
    borderRadius: "10px",
    color: "#fff",
    backgroundColor: "#30723f",
    fontSize: "13px",
    "&:hover": {
      backgroundColor: "#265d33",
    },
    "&:active": {
      backgroundColor: "#348948",
    },
  },
  textVariant: {
    width: "270px",
    height: "24px",
    fontSize: "14px",
    fontWeight: "500",
    textDecoration: "underline",
    color: "#30723f",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
};

const ButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => prop !== "buttonVariant",
})(({ buttonVariant }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  transition: "0.1s",
  ...(variantStyles[buttonVariant] || {}),
}));
