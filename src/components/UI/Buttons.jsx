import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
const variantStyles = {
  addToBasket: {
    width: "344px",
    height: "50px",
    padding: "10px",
    color: "#fafafa",
    backgroundColor: "#121314",
    fontSize: "20px",
    fontWeight: 400,
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
    border: "0.2px solid #000",
    backgroundColor: "white",
    fontSize: "12px",
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
    backgroundColor: "white",
    fontSize: "10px",
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
    fontSize: "12px",
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
    backgroundColor: "#121314",
    fontSize: "20px",
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
    fontSize: "14px",
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
    fontSize: "14px",
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
    fontSize: "14px",
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
    fontSize: "14px",
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
    fontSize: "16px",
    fontWeight: 500,
    textDecoration: "underline",
    color: "#30723f",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
};
const Buttons = ({
  children,
  onClick,
  disabled,
  variant = "addToBasket",
  type = "button",
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant="contained"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textTransform: "none",
        transition: "0.1s",
        ...variantStyles[variant],
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(variantStyles)),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Buttons;
